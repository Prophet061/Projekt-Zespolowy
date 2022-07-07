function startSlick() {
  $('.small-box-container').slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    infinite: false,
    speed: 300,
    waitForAnimate: false,
  });
}
function fetchData() {
  $(".chart").addClass("loading");


  if ($symbols.length == 0) $symbols = ['EUR'];
  $symbols.remove($base);
  if ($symbols.length == 0) $symbols = ['USD'];


  $url = "https://api.exchangerate.host/timeseries?start_date={0}&end_date={1}&base={2}&symbols={3}";
  $url = $url.f($date_start, $date_end, $base, $symbols);


  $.ajax({
    url: $url,
    type: "GET",
  }).done(function($data) {
    $series = new Array();
    $values = new Array();
    $temp_value = new Array();
    $max = 0;

    $.each($data.rates, function(date, e) {
      $series.push(date);
      $.each(e, function($symbol, $v) {
        if(!$temp_value[$symbol]) $temp_value[$symbol] = new Array();

        $v = 1/$v;

        $temp_value[$symbol].push($v);

        if($v > $max) $max = $v;
      })
    })

    $.each(Object.keys($temp_value), function($i, $symbol){
      $color = dynamicColors();

      $values.push({
        'label': $symbol,
        'data': $temp_value[$symbol],
        'backgroundColor' : $color,
        'borderColor' : $color,
        'borderWidth': 2,
      })
    })


    $max = $max * 1.15;
    drawChart($series, $values);
    $(".chart").addClass("removeClass");
  }).fail(function($r) {
    d($r.responseText);
  });
}
function drawChart($headers, $values) {
  $(".chart").addClass("loading");
  $('#chart canvas').remove();
  $('#chart').append('<canvas><canvas>');

  $c = $("#chart canvas").get(0).getContext('2d');
  chart = new Chart($c, {
      type: 'line',
      data: {
          labels: $headers,
          datasets: $values
      },
      options: {
        locale: "pl-PL",
        layout: {
            padding: 20
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxis: {
            ticks: {
              color: 'rgba(255, 255, 255, 0.5)',
              minRotation: 35,
              maxRotation: 60,
            }
          },
          yAxis: {
            ticks: {
              color: 'rgba(255, 255, 255, 0.5)',
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false,
            intersect: false,
            external: function(context){
              // Tooltip Element
              let tooltipEl = document.getElementById('chartjs-tooltip');

              // Create element on first render
              if (!tooltipEl) {
                  tooltipEl = document.createElement('div');
                  tooltipEl.id = 'chartjs-tooltip';
                  tooltipEl.innerHTML = '<table></table>';
                  document.body.appendChild(tooltipEl);
              }

              // Hide if no tooltip
              const tooltipModel = context.tooltip;
              if (tooltipModel.opacity === 0) {
                  tooltipEl.style.opacity = 0;
                  return;
              }

              function getBody(bodyItem) {
                  l = bodyItem.lines
                  l = l[0].split(":");

                  $l = $("#currencies").find("li[value='"+l[0]+"']").text();

                  $v = parseFloat(l[1].replace(",", ".")).toFixed(2);

                  $t = "1 "+$l+" - "+$v+" "+$base_nice;
                  return [$t];
              }

              // Set Text
              if (tooltipModel.body) {
                  const titleLines = tooltipModel.title || [];
                  const bodyLines = tooltipModel.body.map(getBody);


                  let innerHtml = '<tbody>';

                  bodyLines.forEach(function(body, i) {
                      const colors = tooltipModel.labelColors[i];
                      let style = 'background:' + colors.backgroundColor;
                      style += '; border-color:' + colors.borderColor;
                      style += '; border-width: 2px';
                      const span = '<span style="' + style + '"></span>';

                      innerHtml += '<tr><td>' + span + body + '</td></tr>';
                  });
                  innerHtml += '</tbody>';

                  let tableRoot = tooltipEl.querySelector('table');
                  tableRoot.innerHTML = innerHtml;
              }

              const position = context.chart.canvas.getBoundingClientRect();
              const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

              // Display, position, and set styles for font
              tooltipEl.style.opacity = 1;
              tooltipEl.style.position = 'absolute';
              tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
              tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
              tooltipEl.style.pointerEvents = 'none';

            }
          }
        }
      }
  });
  $(".chart").removeClass("loading");
}
function savePreset() {
  $save = {};

  $symbols_nice = [];
  $.each($symbols, function(i, e) {
    $nice = $("#currencies").find("li[value='" + e + "']").text();
    $symbols_nice.push($nice);
  })

  $save.base = $base;
  $save.base_nice = $base_nice;
  $save.symbols = $symbols;
  $save.symbols_nice = $symbols_nice;
  $save.duration = $("#duration").val();
  $save.id = md5(new Date().toLocaleString());

  $saves = localStorage.getItem("shortcuts") ? JSON.parse(localStorage.getItem("shortcuts")) : [];
  $saves.unshift($save);

  localStorage.setItem("shortcuts", JSON.stringify($saves));
  loadPresets();
}
function loadEmptyPresets(){

}
function loadPresets() {
  $('.small-box-container.slick-initialized').slick('unslick')
  $(".small-box.empty").hide();
  $(".small-box:not(.source, .empty)").remove();
  $saves = localStorage.getItem("shortcuts") ? JSON.parse(localStorage.getItem("shortcuts")) : [];

  if($saves.length == 0) return $(".small-box.empty").show();

  $.each($saves, function(i, e) {
    $el = $(".small-box.source").clone().removeClass("source");

    $url = "/site/exchanges?base={0}&duration={1}&currencies={2}";
    $url = $url.f(e.base, e.duration, e.symbols.join(","));


    $el.find(".small-box-title").text(e.base_nice);
    $el.find(".small-box-currencies").attr("title", e.symbols_nice.join(", "));
    $el.find(".small-box-currencies").text(trauncate(e.symbols_nice.join(", "), 40));
    $el.find(".small-box-delete").attr("onclick", "deletePreset('"+e.id+"')");

    $el.attr("href", $url)

    $dest = $(".small-box-container .slick-track").get(0) ? $(".small-box-container .slick-track") : $(".small-box-container")
    $dest.append($el);
  })

  startSlick();
}
function resizeChart() {
  $w = $("#chart").width();
  $h = $("#chart").height();
  if(chart) chart.resize($w, $h);
}

function deletePreset($id) {
  event.preventDefault();
  $saves = localStorage.getItem("shortcuts") ? JSON.parse(localStorage.getItem("shortcuts")) : [];

  $.each($saves, function(i, e) {
    if(e && e.id == $id) $remove = $id;
  })
  $saves.splice($remove, 1);
  localStorage.setItem("shortcuts", JSON.stringify($saves));
  loadPresets();
}


$("#currencies").on("change", function(e) {
  $e = $(e.target);

  $symbols = $e.val2();
  fetchData();
})
$("#duration").on("change", function(e) {
  $e = $(e.target);
  $v = $e.val();

  $date_start = getDate($v);
  $date_end = getDate();

  fetchData();
})
$("#base").on("change", function(e) {
  $e = $(e.target);

  $v = $e.val();
  $t = $("select#base").find("option[value='" + $v + "']").text();
  $("h1 currency").text($t);

  $base = $v;
  $base_nice = $t;
  fetchData();
})
$('.small-box-container').on('wheel', (function(e) {
  e.preventDefault();
  if (e.originalEvent.deltaY > 0) {
    $(this).slick('slickNext');
  } else {
    $curr = $(this).slick('slickCurrentSlide');
    if ($curr === 1) return false;
    $(this).slick('slickPrev');
  }
}));

$(document).ready(function() {
  $base = getUrlParameter("base") ? getUrlParameter("base") : "PLN";
  $base_nice = $("#currencies").find("li[value='" + $base + "']").text();
  $("h1 currency").text($base_nice);


  $date_start = getDate(getUrlParameter("duration") ? getUrlParameter("duration") : -3);
  $date_end = getDate();
  $symbols = $("#currencies").val2();
  $max = 10;

  setInterval(function(){
    resizeChart()
  }, 100)

  fetchData();

  loadPresets();
})

$change_rates = new Array();
$direction = "ttb";

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
function switchRandomFluctuations(){
  if(typeof($change_rates) != "object") return false;

  $('.small-box-container.slick-initialized').slick('unslick')

  for ($i = 1; $i <= 10; $i++) {
    $index = Math.floor(Math.random() * $change_rates.length)
    $random = $change_rates[$index];
    $change_rates.splice($index, 1);

    $el = $(".small-box.source").clone().removeClass("source");
    $el.find(".small-box-title").text($random.name);
    $el.find(".small-box-value value").text(parseFloat($random.value).toFixed(2) + " " + $base);
    $el.find(".small-box-value change").text(" "+ $random.change).addClass($random.change > 0 ? "profit" : "loss");
    $el.find(".small-box-date date").text(new Date().toLocaleString());

    // $el.attr("href", $url)

    $dest = $(".small-box-container .slick-track").get(0) ? $(".small-box-container .slick-track") : $(".small-box-container")
    $dest.append($el);
  }


  startSlick();
}
function getRandomFluctiations(){
  $date_start = getDate(-1);
  $date_end = getDate();


  $url = "https://api.exchangerate.host/fluctuation?start_date={0}&end_date={1}&base={2}";
  $url = $url.f($date_start, $date_end, $base);


  $.ajax({
    url: $url,
    type: "GET",
  }).done(function($data) {
    $fluctuations = $data.rates;
    $.each($fluctuations, function(i, e){
      if(i != $base) $change_rates.push({'code': i, 'name': $currencies[i], 'value': 1/e.end_rate, 'change': e.change});
    })

    switchRandomFluctuations();
  }).fail(function($r) {
    d($r.responseText);
  });
}
function loadHistory(){
  $(".exchange-log:not(.source)").remove();

    $history = localStorage.getItem("calculations") ? JSON.parse(localStorage.getItem("calculations")) : [];
    $.each($history, function(i, e){
      $el = $(".exchange-log.source").clone().removeClass("source");
      $el.find("p.from").text(e.from+" "+e.from_code);
      $el.find("p.to").text(e.to+" "+e.to_code);
      $el.find(".exchange-date").text(e.date);

      $(".exchange-holder").append($el);
    })




}
function saveHistory($fv, $f, $tv, $t){
    $save = {};

    if(isNaN($fv) || isNaN($tv)) return;

    $save.from = $fv;
    $save.from_code = $f;
    $save.to = $tv;
    $save.to_code = $t;
    $save.date = new Date().toLocaleString();

    $saves = localStorage.getItem("calculations") ? JSON.parse(localStorage.getItem("calculations")) : [];
    $saves.unshift($save);

    localStorage.setItem("calculations", JSON.stringify($saves));
    loadHistory();
}

function calculate($from, $to, $amount, $direction){
  $url = "https://api.exchangerate.host/convert?from={0}&to={1}&amount={2}";
  $url = $url.f($from, $to, $amount);

  $.ajax({
    url: $url,
    type: "GET",
  }).done(function($data) {
    $rate = $data.info.rate;

    if(isNaN($data.result) || typeof($data.result) != "number") return;

    if($direction == "ttb"){
      $("#target_value").val(parseFloat($data.result).toFixed(2));
      $("exchange primary").text("1 "+$from+" = "+parseFloat((1/$rate)).toFixed(2)+" "+$to);
      $("exchange secondary").text("1 "+$to+" = "+parseFloat(($rate)).toFixed(2)+" "+$from);
    } else {
      $("#base_value").val(parseFloat($data.result).toFixed(2));
      $("exchange primary").text("1 "+$from+" = "+parseFloat(($rate)).toFixed(2)+" "+$to);
      $("exchange secondary").text("1 "+$to+" = "+parseFloat((1/$rate)).toFixed(2)+" "+$from);
    }

    saveHistory(parseFloat(($amount)).toFixed(2), $from, parseFloat(($data.result)).toFixed(2), $to)

    switchRandomFluctuations();
  }).fail(function($r) {
    d($r.responseText);
  });
}


$(document).ready(function() {
  $base = getUrlParameter("base") ? getUrlParameter("base") : "PLN";

  $("#base_value").on("calculate", function(){
    $base = $("#base").val();
    $base_value = $("#base_value").val();
    $target = $("#target").val();
    $target_value = $("#target_value").val();
    if(isNaN($base_value) || $base_value == "") return;

    $("#target_value").val("");
    calculate($base, $target, $base_value, "ttb");
  })
  $("#target_value").on("calculate", function(){
    $base = $("#base").val();
    $base_value = $("#base_value").val();
    $target = $("#target").val();
    $target_value = $("#target_value").val();
    if(isNaN($target_value) || $target_value == "") return;

    $("#base_value").val("");
    calculate($target, $base, $target_value, "btt");
  })

  $("#base, #target").on("change", function(){
    $e = $(event.target);
    $id = $e.attr("id")

    if($id.includes("target")){
      $("#target_value").trigger("calculate");
    } else {
      $("#base_value").trigger("calculate");
    }
  })

  $("#base_value").keyup($.debounce(function() {
      $("#base_value").trigger("calculate")
  }, 800));
  $("#target_value").keyup($.debounce(function() {
      $("#target_value").trigger("calculate")
  }, 800));

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


  loadHistory();
  getRandomFluctiations();
})

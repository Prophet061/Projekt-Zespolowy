<?php

/** @var yii\web\View $this */

$this->title = 'Kalkulator walut';

$base = isset($g['base']) ? $g['base'] : "PLN";
$duration = isset($g['duration']) ? $g['duration'] : -3;
$target = isset($g['target']) ? $g['target'] : "EUR";
?>


<script type="text/javascript">
$currencies = {};
<? if($existing_currencies) foreach ($existing_currencies as $k => $v) { ?>
  $currencies['<?= $v->symbol ?>'] = "<?= $v->name ?>";
<? } ?>
</script>
<!--
<div class="h-100">
    https://exchangerate.host/#/
    Convert currency
    https://api.exchangerate.host/convert?from=USD&to=EUR
    https://api.exchangerate.host/convert?from=PLN&to=EUR&amount=1
</div> -->


<div class="h-100">
  <div class="row">
    <h1>Kalkulator waluty</h1>
  </div>
  <div class="row row-column h-after-100">
    <div class="content">
      <div class="calculator">
        <div class="box-row">
          <div class="box-column">
            <h3>CHCĘ WYMIENIĆ: </h3>
            <div class="calculator-row">
              <div class="calculator-column">
                <input type="text" class="calculator-input" id="base_value">
              </div>
              <div class="calculator-column">
                <select id="base">
                  <? if($existing_currencies) foreach ($existing_currencies as $k => $v) { ?>
                    <option value="<?= $v->symbol ?>" <?= $base == $v->symbol ? "selected" : "" ?>><?= $v->name ?></option>
                  <? } ?>
                </select>
              </div>
            </div>
            <h3>CHCĘ OTRZYMAĆ: </h3>
            <div class="calculator-row">
              <div class="calculator-column">
                <input type="text" class="calculator-input" id="target_value">
              </div>
              <div class="calculator-column">
                <select id="target">
                  <? if($existing_currencies) foreach ($existing_currencies as $k => $v) { ?>
                    <option value="<?= $v->symbol ?>" <?= $target == $v->symbol ? "selected" : "" ?>><?= $v->name ?></option>
                  <? } ?>
                </select>
              </div>
            </div>
            <div class="calculator-result">
              <h3>BIEŻĄCY KURS:
                <exchange>
                  <primary>1 EUR = 4,7460 PLN</primary>
                  <secondary>1 PLN = 0,2107 EUR</secondary>
                </exchange>
              </h3>

              <!-- <button type="button" onclick="calculate()">Przelicz</button> -->

            </div>
          </div>
          <div class="box-column">
            <h3>Jak korzystać?</h3>

            <p>Wpisz kwotę w jedno z dwóch przeznaczonych do tego miejsc a następnie wybierz waluty, które Cie interesują.</p>
            <p>Po wszystkim zatwierdź operację klikając przycisk “Przelicz” znajdujący się na dole sekcji.</p>
          </div>
        </div>
      </div>

      <div class="row">
        <h2>WYBRANE ZMIANY W KURSACH WALUT:</h2>
      </div>
      <div class="row line small-box-container">

        <a class="small-box source">
          <p class="small-box-title">EURO</p>
          <p class="small-box-value"><value>4,7000 PLN</value><change>0.001383 </change></p>
          <p class="small-box-date">Data aktualizacji: <date>12:00 23.03.2022</date></p>
        </a>

      </div>
    </div>
    <div class="toolbox">
      <div class="handle-bar" onclick='$(".toolbox").toggleClass("open")'>
        <i class="far fa-caret-down"></i>
      </div>
      <p class="label">Ostatnie kalkulacje</p>
      <div class="exchange-holder">
        <div class="exchange-log source">
          <div class="exchange-values">
            <p class="from">300 EUR</p>
            <i class="fas fa-exchange-alt"></i>
            <p class="to">1200 PLN</p>
          </div>
          <div class="exchange-date">
            <p>12:00 20.05.2022r</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

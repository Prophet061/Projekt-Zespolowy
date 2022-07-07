<?php

/** @var yii\web\View $this */

$this->title = 'Aktualne kursy walut';
//
$base = isset($g['base']) ? $g['base'] : "PLN";
$duration = isset($g['duration']) ? $g['duration'] : -3;
$currencies = isset($g['currencies']) ? explode(",", $g['currencies']) : ['EUR', 'USD', 'GBP'];
?>


<div class="h-100">
  <div class="row">
    <h1>Wykres dla waluty: <currency>Polski złoty</currency></h1>
  </div>
  <div class="row row-column h-after-100">
    <div class="content">
      <div class="chart loading" id="chart">
        <canvas></canvas>
      </div>

      <div class="row">
        <h2>Na skróty:</h2>
      </div>
      <div class="row line small-box-container">
        <a class="small-box source">
          <p class="small-box-title">POLSKI ZŁOTY 1</p>
          <i class="small-box-delete fas fa-times" onclick="deletePreset(0)"></i>
          <p class="small-box-currencies">EURO, ŻAPPS, PESO KOLUMBIJSKIE, KORONA CZESKA</p>
        </a>

        <a class="small-box empty">
          <p class="small-box-title">Brak zapisanych wykresów</p>
          <p class="small-box-currencies">W chwili obecnej nie posiadasz żadnych zapisanych wykresów, które można by wczytać.</p>
        </a>


      </div>
    </div>
    <div class="toolbox">
      <div class="handle-bar" onclick='$(".toolbox").toggleClass("open")'>
        <i class="far fa-caret-down"></i>
      </div>
      <p class="label">Wybierz walutę bazową</p>
      <select id="base">
        <? if($existing_currencies) foreach ($existing_currencies as $v) { ?>
          <option value="<?= $v['symbol'] ?>" <?= $v['symbol'] == $base ? "selected" : ""?>   ><?= $v['name'] ?></option>
        <? } ?>
      </select>
      <p class="label">Wybierz przedział czasowy</p>
      <select id="duration">
        <option <?= $duration == -3 ? "selected" : ""?> value="-3">Ostatnie 3 dni</option>
        <option <?= $duration == -7 ? "selected" : ""?> value="-7">Ostatni tydzień</option>
        <option <?= $duration == -14 ? "selected" : ""?> value="-14">Ostatnie 2 tygodnie</option>
      </select>
      <p class="label">Dodaj walutę na wykres</p>

      <ul class="custom-multiple-select" id="currencies">
        <? if($existing_currencies) foreach ($existing_currencies as $v) { ?>
          <li value="<?= $v['symbol'] ?>" class="<?= in_array($v['symbol'], $currencies) ? "selected" : ""?> "><?= $v['name'] ?></li>
        <? } ?>
      </ul>

      <button type="button" onclick="savePreset()">Zapisz wykres</button>
    </div>

  </div>
</div>

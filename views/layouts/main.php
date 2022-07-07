<? use app\assets\AppAsset;

$c = Yii::$app->controller->id;
$a = Yii::$app->controller->action->id;
AppAsset::register($this);

$this->beginPage()


?>
<!DOCTYPE html>
<html>

  <head>
    <title><?= $this->title ?></title>
      <meta charset="<?= Yii::$app->charset ?>">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <? $this->head() ?>
      <? $this->registerCsrfMetaTags() ?>
  </head>


  <body class="">
    <?php $this->beginBody() ?>
    <smartphone>
      <div class="">
        <i class="fas fa-tablet"></i>
        <i class="fas fa-laptop"></i>
        <i class="fas fa-desktop"></i>
      </div>
      <br>
      <br>

      <h1>Nieobsługiwane urządzenie</h1>
      <br>
      <p>Przepraszamy, ale urządzenie z którego korzystasz nie jest przystosowane do korzystania z tej aplikacji.</p>
      <br>
      <p>Rozdzielczość Twojego urządzenia nie pozwala na wyświetlenie wszystkich niezbędnych danych w przystępnym formacie</p>
    </smartphone>


    <div class="sidebar bg-standard">
      <div class="handle-bar" onclick='$(".sidebar").toggleClass("open")'>
        <i class="far fa-caret-down"></i>
      </div>
      <div class="navigation mb-24">

        <a href="/site/exchanges" class="menu-item mb-16">
          <i class="fas fa-chart-line"></i>
          <p>Kursy walut</p>
        </a>

        <a href="/site/calculator" class="menu-item mb-16">
          <i class="fas fa-calculator"></i>
          <p>Kalkulator walut</p>
        </a>

        <a href="/site/changes" class="menu-item mb-16">
          <i class="fas fa-chart-bar"></i>
          <p>Wykres zmian</p>
        </a>

        <a href="/site/zapps" class="menu-item mb-16">
          <i class="fas fa-frog"></i>
          <p>Żappsy</p>
        </a>


      </div>
      <div class="authors">
        <p class="text-24 line-32 mb-24">Autorzy</p>

        <div class="mb-24">
          <p class="text-18 line-24">Jakub Saładiak</p>
          <p class="text-8 line-16">Project manager</p>
        </div>

        <div class="mb-24">
          <p class="text-18 line-24">Jakub Janusz</p>
          <p class="text-8 line-16">Full-Stack Developer</p>
        </div>

        <div class="mb-24">
          <p class="text-18 line-24">Kamil Konieczny</p>
          <p class="text-8 line-16">Frontend Developer / UI Co-Designer</p>
        </div>

        <div class="mb-24">
          <p class="text-18 line-24">Michał Cwanek</p>
          <p class="text-8 line-16">Tester / UI Designer</p>
        </div>


      </div>
    </div>

    <div class="primary h-100 bg-standard">
      <?= $content ?>

    </div>
    <?php $this->endBody() ?>
  </body>


</html>
<?php $this->endPage() ?>

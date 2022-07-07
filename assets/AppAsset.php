<?
namespace app\assets;
use yii\web\AssetBundle;

class AppAsset extends AssetBundle{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
      'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css',
      'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
      'css/fontawesome.min.css',
      'css/reset.css',
      'css/site.css',
    ];
    public $js = [
      '/js/libs/jquery.debounce-1.0.5.js',
      // 'https://www.gstatic.com/charts/loader.js',
      'js/libs/chart.js',
      'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
      'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js',
      // 'https://kit.fontawesome.com/37ef38c4c9.js',
      'js/app.js',
    ];

    public $depends = [
        'yii\web\YiiAsset',
    ];
}

<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\Currency;

class SiteController extends Controller{
    public function actions(){
        return [
            'error' => [ 'class' => 'yii\web\ErrorAction' ],
            'captcha' => [ 'class' => 'yii\captcha\CaptchaAction', 'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null ],
          ];
    }

    public function beforeAction($action){
      Yii::$app->getView()->registerJsFile(Yii::$app->request->BaseUrl . '/js/controllers/'.Yii::$app->controller->id.'-'.Yii::$app->controller->action->id.'.js?t='.time(), ['depends' => 'yii\web\JqueryAsset']);


      return true;
    }

    public function actionIndex(){
      return $this->redirect(['site/exchanges']);
    }

    public function actionExchanges(){
      $currencies = Currency::getByParams();
      $g = Yii::$app->request->get();
      $p = Yii::$app->request->post();

      return $this->render('exchanges', ['g' => $g, 'existing_currencies' => $currencies]);
    }
    public function actionCalculator(){
      $currencies = Currency::getByParams();
      $g = Yii::$app->request->get();
      $p = Yii::$app->request->post();

      return $this->render('calculator', ['g' => $g, 'existing_currencies' => $currencies]);
    }
    public function actionChanges(){
      $currencies = Currency::getByParams();
      $g = Yii::$app->request->get();
      $p = Yii::$app->request->post();

      return $this->render('changes', ['g' => $g, 'existing_currencies' => $currencies]);
    }
    public function actionZapps(){
      $currencies = Currency::getByParams();
      $g = Yii::$app->request->get();
      $p = Yii::$app->request->post();

      return $this->render('zapps', ['g' => $g, 'existing_currencies' => $currencies]);
    }
}

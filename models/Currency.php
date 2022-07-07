<?php namespace app\models;
      use Yii;


class Currency extends \yii\db\ActiveRecord{
  public static function tableName(){
        return 'currency';
    }
  public function rules(){
        return [
            [['name', 'symbol'], 'required'],
            [['name'], 'string', 'max' => 64],
            [['symbol'], 'string', 'max' => 3],
        ];
    }
  public function attributeLabels(){
        return [
            'id' => 'ID',
            'name' => 'Name',
            'symbol' => 'Symbol',
        ];
    }

  public static function getById($id){
    if(!$id) return NULL;
    return Currency::findOne(['id' => $id]);
  }

  public static function getByParams($params = []){
    $currencies = Currency::find();

    if($params) foreach ($params as $k => $v) $currencies->andWhere([$k => $v]);

    $currencies = $currencies->orderBy(['name' => SORT_ASC]);

    $r = $currencies->all();
    return $r ? $r : [];
  }


}

<?php


// JSONを読み取る
$url = "https://click.ecc.ac.jp/ecc/hkusano/study/cms/config/B.json";
$json = file_get_contents($url);
// JSON形式をPHPで扱える変数に変換する
$data = json_decode($json, true);
// JSONの形に変える
$newData = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
print_r($newData);

// ファイルのパスを指定
file_put_contents("./useJSON/data.json" , $newData);
chmod("./useJSON/data.json", 0755);

// print_r($data[2]["children"][0]["data"][0]);

$fruits = array(
    array("果物"=>"イチゴ","color"=>"red"),
    array("果物"=>"レモン","color"=>"yellow"),
    array("果物"=>"リンゴ","color"=>"red")
);

// フルーツの配列を入れる
$data = $fruits;
// print_r(json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));




?>

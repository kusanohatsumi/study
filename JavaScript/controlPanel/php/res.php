<?php
include "json.php";

$param =$_GET["category"];

// JSONを読み取る
$url = "https://click.ecc.ac.jp/ecc/hkusano/study/cms/config/B.json";
$json = file_get_contents($url);

print_r($$param);


// JSON形式をPHPで扱える変数に変換する
$data = json_decode($json, true);
// PHPの変数をJSONの形に変える
$newData = json_encode($$param, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);


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



// ディレクトリの削除
// rmdir("./test");

// ファイルの削除
// unlink("./test/data.json");

// 作成したディレクトリにファイルを追加し、その中にデータを入れる
// file_put_contents("./json/data.json" , $data);

// 作成したファイルのパーミッションを変更
// chmod("./json/data.json", 0777);

?>

<?php

// フォームから送られてきたデータを取得する

$itemList = $_POST;
$listValue = $_POST["value"];

// データの数
$length = count($itemList);
// 空の配列を作成
$array = array();

// それぞれの配列を作成しデータを入れる処理
$id=-1;
foreach ($itemList as $item) {
    $id++;
    $item = array(
        "id" => $id,
        "value" => $listValue[$id],
    );
    $array[] = $item;
};
print_r($array);
// PHPの変数をJSONの形に変える
$newData = json_encode($array, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
// 作成したディレクトリにファイルを追加し、その中にデータを入れる
file_put_contents("./json/item.php" , $newData);
chmod("./json/data.json", 0755);
?>
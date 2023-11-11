<?php
include "data.php";
$param =$_GET["category"];

$data = json_encode($$param, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

// データの上書き
file_put_contents("./json/data.json" , $data);

// 作成したファイルのパーミッションを変更
// chmod("./json/data.json", 0777);

$title = $$param["title"];

?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../css/index.css" rel="stylesheet" />
    <title>Document</title>
</head>
<body>
    <header>
        <h1><?php echo $title; ?>ページ</h1>
    </header>
    <main>
        <form id="edit">
            <div id="edit-item"></div>
            <button id="btn" type="button">保存</button>
        </form>
    </main>
    <script src="../js/edit.js" ></script>
</body>
</html>
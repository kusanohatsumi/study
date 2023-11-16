<?php
$param =$_GET["category"];
include "./category.php";


// 一覧のデータを取得する
$all = $contents;
print_r($all[$param]["data"]);

// JSON形式で取得
$paramData = $all[$param];
$paramTitle = $paramData["title"];
$paramItem = $all[$param]["data"];
$length = count($paramItem);

// print_r($all[$param]["data"]);

// データを更新する
// 保存したデータを読み取る
$url = "https://click.ecc.ac.jp/ecc/hkusano/study/cms/php/json/item.php";
$json = file_get_contents($url);
$updateItem = json_decode($json, true);
// 一時保存先のデータ
// print_r($updateItem);
// カテゴリの[data]にデータを入れる
// $paramItem = $updateItem;


// $all[$param]["data"](元データ) と $updateItem(更新データ) は同じ形式のデータ

print_r($all[$param]["data"] = $all[$param]["data"]);




?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../css/index.css" rel="stylesheet" />
    <title>サンプル</title>
</head>
<body>
    <header>
        <h1><?php echo $paramTitle; ?>ページ</h1>
    </header>
    <main>
        <form id="edit" action="./item.php" method="POST"  >
            <div id="edit-item">
            <?php for ($i=0; $i <$length ; $i++) { ?>
                <div class="formItem">
                    <label class="formTtl"  for="<?php echo $all[$param]["data"][$i]["title"] ?>"><?php echo $all[$param]["data"][$i]["title"] ?></label>
                    <textarea type="text" name="value[]" value="<?php echo $all[$param]["data"][$i]["value"] ?>"><?php echo $all[$param]["data"][$i]["value"] ?></textarea>
                </div>
            <?php }; ?>
            </div>
            <button id="btn" type="submit">保存</button>
        </form>
    </main>
</body>
</html>
{
  fetch("../config/contents.json")
    .then((response) => response.json())
    .then((data) => {
      let contents = data;
      let top = contents[0].data.text;
      top = "test";
      //  データの更新
      //   編集するデータを省いた新しい配列を作る
      let newData = contents.filter(function (e) {
        if (e.name != "company") return true;
      });
      //   編集したいデータ
      let changeData = contents.filter(function (e) {
        if (e.name === "company") return true;
      });
      //  編集
      // changeData[0].data[0].text = "test";
      //   編集後のデータを配列に追加
      newData.push(changeData[0]);
      //   上書き
      contents = newData;
      console.log(contents[1]);
    });
}

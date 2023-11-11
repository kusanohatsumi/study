{
  const doc = document;
  const addErea = doc.getElementById("editItem");

  const New = doc.getElementById("edit_new");
  const Career = doc.getElementById("edit_career");
  const btn = doc.getElementById("btn");
  const url = "../../config/B.json";

  // phpにデータをもらう時、パラメータをつけてGETすれば1つのJSでいける
  fetch("https://click.ecc.ac.jp/ecc/hkusano/study/cms/php/useJSON/data.json")
    .then((response) => response.json())
    .then((data) => {
      let contents = data;
      console.log(contents);
      // JSONデータを編集する
      //   編集したいデータを[contents]から抜いた新しい配列
      let newData = contents.filter(function (e) {
        if (e.id != "recruit") return true;
      });
      //   編集したいデータ
      let recruit = contents.filter(function (e) {
        if (e.id === "recruit") return true;
      });
      let recruitData = recruit[0].children[0].data;

      // ------------------------------
      // idを追加
      let addId = function () {
        for (let i = 0; i < recruitData.length; i++) {
          // この中に書くとrecruitDataの数分処理が走る
          // IDを追加
          recruitData[i].id = i;
          // 編集セルをデータの数分用意
          addErea.innerHTML += `
          <div class = "formItem">
            <label class="formTtl" for="${recruitData[i].title}">${recruitData[i].title}</label>
            <textarea id=${recruitData[i].id} class="input" type="text" name="${recruitData[i].title}" value="${recruitData[i].value}">${recruitData[i].value}</textarea>
          </div>
          `;
        }
      };
      addId();

      // JSONデータを更新する
      let dataUpdate = function () {
        // JSで生成した要素にイベントを追加
        const input = doc.querySelectorAll(".input");
        input.forEach((e) => {
          let Eid = e.id;
          // e.addEventListener("click", () => {
          //   console.log("編集前のデータ:" + e.value);
          //   console.log(recruitData[Eid]);
          // });
          e.addEventListener("change", () => {
            let afterChange = e.value;
            let newChange = (recruitData[Eid].value = afterChange);
            let newItem = {
              id: e.id,
              title: recruitData[Eid].title,
              value: newChange,
            };
            console.log(newItem);

            let a = [newItem];
            let b = [...a];
            console.log(b);
          });
        });
        // 保存処理
        btn.addEventListener("click", async (e) => {
          e.preventDefault();
          let formData = new FormData(New);
          let dataItem = Object.fromEntries(formData.entries());
          // 編集後のデータ;
          console.log(dataItem);

          // // 編集後のデータを配列に追加
          // changeData.push(dataItem);
          // console.log(changeData);
          // let data = { recruit: changeData };
          // console.log(data);
          // newData.push(data);
          // console.log(newData);
        });
      };
      dataUpdate();

      let format = function () {};
      format();

      // ------------------------------
    });
}

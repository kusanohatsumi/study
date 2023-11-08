{
  const doc = document;
  const addErea = doc.getElementById("editItem");

  const New = doc.getElementById("edit_new");
  const Career = doc.getElementById("edit_career");
  const btn = doc.getElementById("btn");
  fetch("../../config/B.json")
    .then((response) => response.json())
    .then((data) => {
      let contents = data;
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
            <label class="formTtl" for="">${recruitData[i].title}</label>
            <textarea id=${recruitData[i].id} class="input" type="text" name="" value="${recruitData[i].value}">${recruitData[i].title}</textarea>
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
          for (let i = 0; i < recruitData.length; i++) {
            e.addEventListener("change", () => {
              if (e.id == recruitData[i].id) {
                // 編集後のデータ
                recruitData[i].title = e.value;
                console.log(recruitData[i]);
              }
            });
          }
        });
      };
      dataUpdate();
      console.log(recruitData);
      delete recruitData[6];
      recruitData.pop();
      console.log(recruitData);

      // btn.addEventListener("click", async (e) => {
      //   e.preventDefault();
      //   let formData = new FormData(New);
      //   let dataItem = Object.fromEntries(formData);
      //   // 編集後のデータ
      //   console.log(dataItem);

      //   // 編集後のデータを配列に追加
      //   changeData.push(dataItem);
      //   console.log(changeData);
      //   let data = { recruit: changeData };
      //   console.log(data);
      //   newData.push(data);
      //   console.log(newData);
      // });
      // ------------------------------
    });
}

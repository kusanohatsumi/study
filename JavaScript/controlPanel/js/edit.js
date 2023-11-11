{
  const doc = document;
  const edit = doc.getElementById("edit");
  const editItem = doc.getElementById("edit-item");
  const btn = doc.getElementById("btn");

  const url =
    "https://click.ecc.ac.jp/ecc/hkusano/study/cms/php/json/data.json";
  fetch(url)
    .then((response) => response.json())
    .then((res) => {
      const data = res.data;

      for (let i = 0; i < data.length; i++) {
        editItem.innerHTML += `
        <div class = "formItem">
            <label class="formTtl" for="${data[i].title}">${data[i].title}</label>
            <textarea id=${data[i].id} class="input" type="text" name="${data[i].title}" value="${data[i].value}">${data[i].value}</textarea>
        </div>
        `;
      }
    });

  console.log("ok");
}

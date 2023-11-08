{
  const doc = document;
  const list = doc.getElementById("list");

  fetch("./config/B.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        list.innerHTML += `
        <li><a class="link" href="page/${data[i].id}" >${data[i].title}</a></li>
        `;
      }
    });
}

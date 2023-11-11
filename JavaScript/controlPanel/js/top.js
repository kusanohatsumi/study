{
  const doc = document;
  const list = doc.getElementById("list");

  const category = [
    { id: 1, name: "top", title: "トップ" },
    { id: 2, name: "company", title: "会社概要" },
    { id: 3, name: "new", title: "採用情報" },
    { id: 4, name: "career", title: "キャリア情報" },
    { id: 5, name: "privacy", title: "プライバシーポリシー" },
    { id: 6, name: "site", title: "サイトーポリシー" },
  ];
  for (let i = 0; i < category.length; i++) {
    list.innerHTML += `
        <li><a class="link" href="php/page.php?category=${category[i].name}">${category[i].title}</a></li>
        `;
  }
}

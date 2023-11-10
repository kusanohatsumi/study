{
  const doc = document;
  const loginId = doc.getElementById("loginId");
  const password = doc.getElementById("password");
  const btn = doc.getElementById("login");

  //   ユーザー情報のJSONデータを持ってくる
  fetch("./config/user.json")
    .then((response) => response.json())
    .then((data) => {
      let userData = data;
      let userId = userData.id;
      let userPassword = userData.password;
      function login() {
        btn.addEventListener("click", () => {
          let loginIdValue = loginId.value;
          let passwordValue = password.value;
          if (userId === loginIdValue && userPassword === passwordValue) {
            console.log("ログイン成功");
            btn.href = "main.html";
          } else {
            loginId.value = "";
            password.value = "";
            console.log("ログイン失敗");
            alert("ログインIDまたはパスワードが違います。");
          }
        });
      }
      login();
    });
}

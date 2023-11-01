{
  const doc = document;
  const item = doc.getElementById("drag");

  let itemY = item.offsetTop; // 要素のY座標
  let itemX = item.offsetLeft; // 要素のX座標

  let dragged = null;
  // ---ドラッグの操作---
  item.addEventListener("dragstart", (e) => {
    console.log("取られた！");
    dragged = e.target;
    console.log(e);
  });
  item.addEventListener("dragend", (e) => {
    console.log("操作終わった！");
  });

  // ドロップ先に要素が入った時
  const target = doc.getElementById("target");
  target.addEventListener("dragenter", (e) => {
    console.log("入った！");
  });
  // ドロップ先から要素が出た時
  target.addEventListener("dragleave", (e) => {
    console.log("出た！");
    target.style.backgroundColor = "#ccc";
  });
  // ドロップ領域の上に要素がいる時
  target.addEventListener("dragover", (e) => {
    target.style.backgroundColor = "pink";
    e.preventDefault();
  });

  // ---ドロップの操作---
  target.addEventListener("drop", (e) => {
    e.preventDefault();
    // e.target() => ドロップ可能なエリアの情報が取れる
    console.log("ドロップされた！");
    let cloneItem = item.cloneNode(true);
    target.appendChild(cloneItem, target);
    // target.style.top = e.pageY + "px";
    // target.style.left = e.pageX + "px";
  });

  // const test = doc.getElementById("test");
  // console.log(test.offsetParent.offsetTop);
  // console.log(test.offsetTop, test.offsetLeft);
  // test.addEventListener("mousedown", (e) => {
  //   // test.style.position = "absolute";
  //   // test.style.top = e.pageY + "px";
  //   // test.style.left = e.pageX + "px";
  //   console.log(e.offsetX, e.offsetY);
  // });
  // test.addEventListener("mousemove", (e) => {});

  // function mousedown(event) {
  //   const object = event.target;
  //   object.style.position = "absolute";
  //   console.dir(event);
  //   console.log(event.target.getBoundingClientRect().top);
  // }
  // function mousemove(event) {
  //   item.style.top = event.pageY + "px";
  //   item.style.left = event.pageX + "px";
  //   console.log(event.pageX, event.pageY);
  // }

  // function mouseup(e) {
  //   console.log("mouseup");
  // }

  // item.addEventListener("mousedown", mousedown);
  // window.addEventListener("mousemove", mousemove);
}

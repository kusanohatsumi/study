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
  });

  // ---mouseEventの操作---
  item.onmousedown = function (event) {
    event.target.style.position = "absolute";
    event.target.style.zIndex = 1000;
    let shiftY = event.pageY - event.target.getBoundingClientRect().top;
    let shiftX = event.pageX - event.target.getBoundingClientRect().left;
    function mousemove(event) {
      event.target.style.top = event.pageY - shiftY + "px";
      event.target.style.left = event.pageX - shiftX + "px";
    }
    function mouseup(e) {
      e.target.removeEventListener("mousemove", mousemove);
      e.target.onmouseup = null;
    }
    item.addEventListener("mousemove", mousemove);
    item.addEventListener("mouseup", mouseup);
  };
}

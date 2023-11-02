{
  const doc = document;
  const item = doc.getElementById("drag");
  const test = doc.getElementById("test");
  console.log(test.offsetParent.offsetTop);
  console.log(test.offsetTop, test.offsetLeft);
  test.addEventListener("mousedown", (e) => {
    test.style.position = "absolute";
    test.style.top = e.pageY + "px";
    test.style.left = e.pageX + "px";
    console.log(e.offsetX, e.offsetY);
  });
  function mousedown(event) {
    event.target.draggable = true;
    event.target.style.position = "absolute";
    let shiftY = event.pageY - event.target.getBoundingClientRect().top;
    let shiftX = event.pageX - event.target.getBoundingClientRect().left;
  }

  item.onmousedown = function (event) {
    event.target.style.position = "absolute";
    let shiftY = event.pageY - event.target.getBoundingClientRect().top;
    let shiftX = event.pageX - event.target.getBoundingClientRect().left;
    function mousemove(event) {
      event.target.style.top = event.pageY - shiftY + "px";
      event.target.style.left = event.pageX - shiftX + "px";
    }
    function mouseup() {
      item.removeEventListener("mousemove", mousemove);
      item.onmouseup = null;
    }
    item.addEventListener("mousemove", mousemove);
    item.addEventListener("mouseup", mouseup);
  };
}

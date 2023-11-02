{
  const doc = document;
  const item = doc.getElementById("drag");

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

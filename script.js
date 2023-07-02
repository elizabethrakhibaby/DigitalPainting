var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = "black";
var radius = 50;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;

function startPaint(event) {
  isPainting = true;	
  var x = event.clientX || event.touches[0].clientX;	
  var y = event.clientY || event.touches[0].clientY;	
  doPaint(x, y);
}

function endPaint() {
  isPainting = false;
}

function doPaint(x, y) {
  if (isPainting) {
	  var rect = paintcanvas.getBoundingClientRect();	
    var canvasX = x - rect.left;	
    var canvasY = y - rect.top;	
    paintCircle(canvasX, canvasY);
  }
}

function clearCanvas() {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
  // make sure to start a new circle each time
  context.beginPath();
  // draw circle using a complete (2*PI) arc around given point
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
}

// Add mouse event listeners
paintcanvas.addEventListener("mousedown", startPaint);
paintcanvas.addEventListener("mousemove", function (event) {
  if (isPainting) {
    var rect = paintcanvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    doPaint(x, y);
  }
});
paintcanvas.addEventListener("mouseup", endPaint);

function changeWidth(value) {
  if (isNumeric(value)) {
    var canvas = document.getElementById("canvas1");
    canvas.width = value;
  } else {
    alert("Please enter a numerical value for the width!");
  }
}

function changeHeight(value) {
  if (isNumeric(value)) {
    var canvas = document.getElementById("canvas1");
    canvas.height = value;
  } else {
    alert("Please enter a numerical value for the height");
  }
}

// verify the given value is actually a number
function isNumeric(value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}

function changeColour(newCol) {
  color = newCol;
}

function changeBrushSize(newBrush) {
  radius = newBrush;
  document.getElementById("sliderDisplay").value = newBrush;
}

function doAbout() {
  var info = document.getElementById("authorInfo");
  info.innerHTML =
    "This website was created and designed by Elizabeth Rakhi Baby. Created using Javascript, HTML & CSS!";
}

function clearAbout() {
  var info = document.getElementById("authorInfo");
  info.innerHTML = "";
}

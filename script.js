var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = "black";
var radius = 50;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;

function startPaint(event) {	
  isPainting = true;	
  var coordinates = getCoordinates(event);	
  doPaint(coordinates.x, coordinates.y);	
}	

		
function getCoordinates(event) {	
  var rect = paintcanvas.getBoundingClientRect();	
  var x, y;	
  if (event.touches) {	
    x = event.touches[0].clientX - rect.left;	
    y = event.touches[0].clientY - rect.top;	
  } else {	
    x = event.clientX - rect.left;	
    y = event.clientY - rect.top;	
  }	
  return { x: x, y: y };	
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
    var coordinates = getCoordinates(event);	
    doPaint(coordinates.x, coordinates.y);	
  }	
});	
paintcanvas.addEventListener("mouseup", endPaint);	
// Add touch event listeners	
paintcanvas.addEventListener("touchstart", function (event) {	
  event.preventDefault();	
  var coordinates = getCoordinates(event);	
  startPaint(coordinates);	
});	
paintcanvas.addEventListener("touchmove", function (event) {	
  event.preventDefault();	
  if (isPainting) {	
    var coordinates = getCoordinates(event);	
    doPaint(coordinates.x, coordinates.y);	
  }	
});	
paintcanvas.addEventListener("touchend", endPaint);

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

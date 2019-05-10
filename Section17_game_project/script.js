// list of colors
// var colors = [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)"
// ];
var colors = generateRandomColors(6);

// select all 6 squares
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;


for(var i=0; i<squares.length; i++)
{
  // assign colors to each square
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to all 6 squares
  squares[i].addEventListener("click", function()
  {
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor; // must use 'this' instead of 'squares[i]' because 'i' is not in scope

    // compare color to pickedColor
    if(clickedColor === pickedColor)
    {
      //alert("Correct!");
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }
    else
    {
      //alert("WRONG!!!");
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color)
{
  // loop through all squares
  for(var i=0; i<squares.length; i++)
  {
    // change color of each square to match the given color
    squares[i].style.backgroundColor = color;
  }
}



function pickColor()
{
  // pick a random float between 1 and colors.length
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num)
{
  var arr = [];
  // add num random colors to array
  for(var i=0; i<num; i++)
  {
    // get random color and push onto array
    arr.push(randomColor());
  }
  return arr;
}


function randomColor()
{
  // pick red from 0-255
  var r = Math.floor(Math.random()*256);
  // pick green from 0-255
  var g = Math.floor(Math.random()*256);
  // pick blue from 0-255
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

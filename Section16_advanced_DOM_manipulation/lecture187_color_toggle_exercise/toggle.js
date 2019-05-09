/*
This script will toggle the background color of the entire body
from purple to white whenever the "Change Color" button is
clicked.
*/



// /* METHOD 1: use boolean flags */
// // select the button
// var button = document.querySelector("button");
// var is_purple = false;

// // define callback function
// function button_cb()
// {
//   if(is_purple === true)
//   {
//     document.querySelector("body").style.background = "white";
//     is_purple = !is_purple;
//   }
//   else
//   {
//     document.querySelector("body").style.background = "purple";
//     is_purple = !is_purple;
//   }
// }

// // add an event listener to connect button click with button_cb
// button.addEventListener("click", button_cb);


/* METHOD 2: use the classList.toggle() function */
// add a button click calback function
function button_cb()
{
  document.body.classList.toggle("purple");
}

// add an event listener to connect button click with button_cb
var button = document.querySelector("button");
button.addEventListener("click", button_cb);


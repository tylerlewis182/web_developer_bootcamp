/*
element.addEventListener(type, callback_function);

 */


// select the first "button" element on the page
var button = document.getElementById("led_button");

// add an event listener to the button so that whenever the button is
// clicked, the callback_function runs
function button_cb()
{
  console.log("Someone clicked the button!!");
}

// button.addEventListener("click",
// function(){
//   console.log("Someone clicked the button!!!");
// });

button.addEventListener("click", button_cb);






// change the color of an 'li' when it is clicked
var lis = document.querySelectorAll("li");
for(var i=0; i< lis.length; i++)
{
  lis[i].addEventListener("click",
  function()
  {
    this.style.color = "pink";
  });
}

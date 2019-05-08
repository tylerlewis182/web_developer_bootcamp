/* QUIZ: Find 4 different ways to select the first <p> tag  */

// store tags in an array
var tags = [];
var tag;

tag = document.getElementById("first");
tags.push(tag);

tag = document.getElementsByClassName("special")[0];
tags.push(tag);

tag = document.getElementsByTagName("p")[0];
tags.push(tag);

tag = document.querySelector("#first");
tags.push(tag);

tag = document.querySelector(".special");
tags.push(tag);




// print out all the tags in the tags array
tags.forEach(function(tag){
  console.log(tag);
});



/* 5 Methods

document.getElementById()
document.getElementByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()

*/

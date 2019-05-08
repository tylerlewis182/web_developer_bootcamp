/* tag.textContent = "new text content"; */

// select the first p tag
var tag = document.querySelector("p");

// alter the textContent (WARNING: this will remove the html elements (strong tag))
tag.textContent = "Note that we lost the strong tag!";



// select the second p tag
var tag = document.querySelectorAll("p")[1];

// view the innerHTML
tag.textContent; // "This is the 2nd awesome paragraph."
tag.innerHTML; // "This is the 2nd <strong>awesome</strong> paragraph."

// get all the HTML for the entire body
var tag = document.body.innerHTML;

// replace all body content with a single <h1> tag
document.body.textContent = "<h1>This does not work right...</h1>"; // treated as text, not element

// replace all body content with a single <h1> tag
document.body.innerHTML = "<h1>This works correctly!!!</h1>"; // treated as an element

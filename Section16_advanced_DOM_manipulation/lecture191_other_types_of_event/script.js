// select the first list item
var lis = document.querySelectorAll("li");

for(var i=0; i < lis.length; i++)
{
  lis[i].addEventListener("mouseover", function()
  {
    this.classList.toggle("selected");
  });

  lis[i].addEventListener("mouseout", function()
  {
    this.classList.toggle("selected");
    //console.log(this); // <li style="color: black;">Wash Cat</li>
  });

  lis[i].addEventListener("click", function()
  {
    this.classList.toggle("done");
  });
}


// // change first list item color to green when hovering over it with mouse
// first_li.addEventListener("mouseover", function()
// {
//   first_li.style.color = "green";
// });


// // change first list item color to black when un-hovering over it with mouse
// first_li.addEventListener("mouseout", function()
// {
//   first_li.style.color = "black";
// });

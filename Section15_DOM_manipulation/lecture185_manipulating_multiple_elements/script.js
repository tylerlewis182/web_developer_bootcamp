// select all the a tags on the page and set their href attribute values to wikipedia.com
var links = document.querySelectorAll("a");

for(var i=0; i < links.length; i++)
{
  //console.log(links[i]);
  links[i].setAttribute("href", "http://www.wikipedia.org");
}

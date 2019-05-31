/* selecting elements using jquery */

// select elements
$("h1")[0]; // <h1>jQuery Sectors</h1>

// select nested elements (all li within ul)
$("ul li")[0]; // <li>Newt</li>

// select by id
$("#first_li")[0]; // <li id="first_li">Newt</li>

// select by class
$(".animal")[0]; // <li class="animal">Monkey</li>

// select element with id "special" and give it a border
$("#special").css("border", "2px solid red");

// pass in an object with styles
var styles =
{
  background: "pink",
  fontWeight: "bold" // note that in css we use '-' but in jquery we use camelcase
};
$("#special2").css(styles);


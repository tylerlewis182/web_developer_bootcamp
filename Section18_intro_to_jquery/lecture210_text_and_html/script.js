// selecting and manipulating text ( .text() )

// get the text from the h1
$("h1").text(); // "jQuery Methods Demo Page"

// get text from the ul
$('ul').text(); // " Skittles Starburst Twix"

// get text from all li elements as one long string
$("li").text(); // "SkittlesStarburstTwix"

// change text in h1
$("h1").text("New Text!!!"); // "New Text!!!"




// selecting and manipulating html ( .html() )

// get the html inside ul
$("ul").html(); // " <li>Skittles</li> <li>Starburst</li> <li>Twix</li>"

// change html inside ul
$("ul").html("<li>New html element</li>"); // <li>New html element</li>

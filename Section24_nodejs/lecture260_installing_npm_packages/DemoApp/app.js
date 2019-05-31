/*

With 'mean' conda environment active, from 'DemoApp' directory, run:

  npm install cat-me # ...don't worry about the warnings

The directory 'node_modules' is added to the current working directory.
Also, 'package-lock.json' file is added to the current working directory.

cat-me docs: https://www.npmjs.com/package/cat-me

*/

var cat = require("cat-me");
//console.log(cat()); // prints out a picture of a cat


// now add knock-knock-jokes: npm install knock-knock-jokes

var joke = require("knock-knock-jokes");
console.log(joke());


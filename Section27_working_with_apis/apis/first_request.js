var request = require("request");
var rp = require("request-promise");

// // make a request
// request('https://jsonplaceholder.typicode.com/users', function(error, response, body)
// {
//   // eval(require('locus'))
//   if(!error && response.statusCode == 200)
//   {
//     let parsedData = JSON.parse(body)[0]; // convert from string to JSON object
//     let name = parsedData.name;
//     let city = parsedData.address.city;
//     console.log(`${name} lives in ${city}.`);
//   }
// });




// make a request using promises
rp('https://jsonplaceholder.typicode.com/users/1')
  .then((body) =>
  {
    const parsedData = JSON.parse(body);
    console.log(`${parsedData.name} lives in ${parsedData.address.city}.`);
  })
  .catch((err) =>
  {
    console.log('Error!', err);
  });

/*
First steps:

  - Create 'APIs' folder
  - Create 'first_request.js'
  - From within 'APIs' folder, run: conda activate mean
  - From within 'APIs' folder, run: npm install node
  - From within 'APIs' folder, run: npm install request

*/


var request = require('request');

request('http://www.google.com', function(error, response, body)
{
  if(error)
  {
    console.log("SOMETHING WENT WRONG!");
    console.log(error);
  }
  else
  {
    if(response.statusCode == 200)
    {
      console.log(body);
    }
  }
});


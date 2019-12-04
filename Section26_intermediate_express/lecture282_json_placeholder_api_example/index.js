/*
Placeholder API data:
  https://jsonplaceholder.typicode.com/users

  - Create 'lecture282_json_placeholder_api_example' folder
  - Create 'index.js'
  - Run: conda activate mean
  - Run: npm install node
  - Run: npm install request
  - Run: npm install -D locus # -D for 'dependencies'

*/

const request = require('request');

request('http://jsonplaceholder.typicode.com/users/1', function(error, response, body)
{
  //eval(require('locus')) // pauses execution for inspection using terminal
    if(!error && response.statusCode == 200)
    {
      const parsedData = JSON.parse(body);
      //console.log(parsedData['name']); // or: parsedData.name
      //console.log(parsedData['name'] + " lives in " + parsedData.address.city);
      console.log(`${parsedData.name} lives in ${parsedData.address.city}`); // backticks similar to Python fstrings
    }
});


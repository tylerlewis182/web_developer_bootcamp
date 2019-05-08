// js objects are hashmaps with key, value pairs

// create a person object
var person =
{
  "name": "Ty",
  "age": 99,
  "city": "New York"
}
console.log(person["age"]);

// access "name"
console.log(person["name"]);
console.log(person.name); // can't use dot notation if property name starts with number

// change "name"
person.name = "Tyler";
console.log(person.name);

// print out all key, value pairs
console.log(person);

// get a list of all the keys in an object
var keys_arr = Object.keys(person);
console.log(keys_arr);

// get a list of all the values in an object
var values_arr = Object.values(person);
console.log(values_arr);

// print out all methods available to an object
console.log(Object.getOwnPropertyNames(Math));



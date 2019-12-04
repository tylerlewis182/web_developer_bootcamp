

function kebabToSnake(s)
{
  s = s.replace(/-/g, "_"); //https://www.w3schools.com/jsref/jsref_obj_regexp.asp
  console.log(s);
  return s;
}


// test cases
kebabToSnake("hello-world"); // "hello_world"
kebabToSnake("dogs-are-awesome"); // "dogs_are_awesome"
kebabToSnake("blah"); // "blah"

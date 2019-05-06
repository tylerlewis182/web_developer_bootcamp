// isEven()
function isEven(num){
  if (num%2===0){
    return true;
  }
  else {
    return false;
  }
}
//val = isEven(4);
//console.log(val);


// factorial()
function factorial(num){
  var result = 1;
  for(var i=2; i<=num; i++){
    result = result*i;
  }
  return result;
}
//fact = factorial(2);
//console.log(fact);

// kebabToSnake() (...replace all _ with - in string)
function kebabToSnake(str){
  return str.replace(/_/g, '-');
}

snake = kebabToSnake("my_string_y");
console.log(snake);

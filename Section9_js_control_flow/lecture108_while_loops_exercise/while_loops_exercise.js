// Print all numbers between -10 and 19:
function func1(){
  var i = -10;
  while(i <= 19){
    console.log(i);
    i++;
  }
}

// Print all even numbers between 10 and 40:
function func2(){
  var i = 10;
  while(i <= 40){
    console.log(i);
    i += 2;
  }
}

// Print all odd numbers between 300 and 333:
function func3(){
  var i = 301;
  while(i <= 333){
    console.log(i);
    i += 2;
  }
}

// Print all numbers divisible by 5 and 3 between 5 and 50:
function func4(){
  var i = 5;
  while(i <= 50){
    if(i%5===0 && i%3===0){
      console.log(i);
    }
    i++;
  }
}



func4();

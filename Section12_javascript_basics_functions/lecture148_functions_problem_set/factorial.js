
function factorial(num)
{
  var sum = 1;
  for(var i=num; i>1; i--)
  {
    sum *= i;
  }
  console.log(sum);
  return sum;
}


// factorial(0) == 1
// factorial(1) == 1
// factorial(2) == 2
// factorial(3) == 6


// test cases
factorial(5);  // 120
factorial(2);  // 2
factorial(10); // 3628800
factorial(0);  // 1

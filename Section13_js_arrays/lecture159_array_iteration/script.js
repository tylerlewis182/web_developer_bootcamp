
var arr = [1, 2, 3, 4, 5];

// // METHOD 1: loop through items using a 'for loop'
// for(var i=0; i<arr.length; i++)
// {
//   console.log(arr[i]);
// }


// METHOD 2: loop through items using 'forEach()'

function square(num)
{
  console.log(num*num);
  return num*num;
}

//arr.forEach(function(item){console.log(item)}); // anonymous function
arr.forEach(square);

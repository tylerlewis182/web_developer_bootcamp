
function average(arr)
{
  var sum = 0;
  for(var i=0; i<arr.length; ++i)
  {
    sum += arr[i];
  }
  var average = Math.round(sum/arr.length);
  return average; // round to nearest whole number
}


/* ------------------- */

var scores = [90, 98, 89, 100, 100, 86, 94];
var res = average(scores); // should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
var res2 = average(scores2); // should return 68

console.log(res);
console.log(res2);

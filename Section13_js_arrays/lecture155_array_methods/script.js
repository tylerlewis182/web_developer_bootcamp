/* array methods (https://www.w3schools.com/jsref/jsref_obj_array.asp) */

// create an array of ints
var nums = [1,2,3,4,5,6,7,8,9];
console.log(nums);

// add element to the end of array
nums.push(99);
console.log(nums);

// remove element from end of array
var popped_item = nums.pop();
console.log(nums);

// add element to front of array
nums.unshift(77);
console.log(nums);

// remove element from the front of array
nums.shift();
console.log(nums);



// find index of the value 3 in the array
var idx = nums.indexOf(3); // returns -1 if item not found
console.log(idx);



// slice items from index 1 to 4
var mixed = [1, 2, 3, "a", "b", 4, 5];
var letters = mixed.slice(3, 5);
console.log(letters);



let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

let newArr = [];
newArr = holdCabinet1.concat(holdCabinet2);
console.log(newArr);
console.log(holdCabinet1);
//No, concat did not alter the original array.

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
holdCabinet1.slice(2);
holdCabinet2.slice(2);
console.log(holdCabinet1.slice(2));
console.log(holdCabinet2.slice(2));
console.log(holdCabinet1);
console.log(holdCabinet2);
//No, slice did not alter the original array.

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log(holdCabinet2);
//reverse method reverses the items in an array and sort method sorts the order of items in an array.
//Yes, reverse and sort methods altered the original array.
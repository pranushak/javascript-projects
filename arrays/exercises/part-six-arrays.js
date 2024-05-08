//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [];
table.push(element1,element2,element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[1],table[1][1]);
//table[1] gives 1 index element which is an array and
//table[1][1] gives index element which is an array,inside this array it checks out for 1 index item.

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let array = [
 [['mango','yellow',2],['apple','red',1],['kiwi','green',4]],
 [['carrot','orange',10],['onion','red',4],['tomato','red',9]],
 [['greens','green',1],['rice','white','1bowl'],['chicken','fish']]
];
 console.log(array[0][2][1]);
 console.log(array[2][1][0]);
 console.log(array[2][2][1]);
// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
function divide(n,d){
    if(d === 0){
        throw Error("you cannot divide by zero.");
    }
    return n/d;
}
console.log(divide(6,3));
console.log(divide(6,0));
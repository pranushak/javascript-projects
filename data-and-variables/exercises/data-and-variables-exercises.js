// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKm);
// Calculate a space mission below
let milesToMars = distanceToMars * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(shuttleName + " " + "will take" + " " + daysToMars + " " + "days to reach Mars.");
//console.log(shuttleName + " " + "will take" + " " + milesToMars + " " + "miles to reach Mars.");
//console.log(shuttleName + " " + "will take" + " " + hoursToMars + " " + "hours to reach Mars.")

// Calculate a trip to the moon below
let milesToMoon = distanceToMoon * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(shuttleName + " " + "will take" + " " + daysToMoon + " " + "days to reach the Moon.")
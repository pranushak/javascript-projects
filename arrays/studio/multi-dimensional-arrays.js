let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCabinet = food.split(',').sort();
let equipmentCabinet = equipment.split(',').sort();
let petsCabinet = pets.split(',').sort();
let sleepAidsCabinet = sleepAids.split(',').sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(foodCabinet,equipmentCabinet,petsCabinet,sleepAidsCabinet);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let cabinetIndex = input.question("Select a cabinet(0-3): ");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(cabinetIndex > cargoHold){
  console.log(`The ${cabinetIndex} index is undefined in cargoHold`);
}else{
  console.log(`The cabinet is ${cargoHold[cabinetIndex]}`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

if(cargoHold[0].includes("meal packs")){
    console.log("Cabinet food does contain 'meal packs'");
}else{
    console.log("Cabinet food does not contain 'meal packs'");
}
if(cargoHold[3].includes("meal packs")){
    console.log("Cabinet sleepAids does contain 'meal packs'");
}else{
    console.log("Cabinet sleepAids does not contain 'meal packs'");
}
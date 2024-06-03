let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let chimpTwo = {
   name : "Brad",
   species : "Chimpanzee",
   mass : 11,
   age : 6
};

let beagle = {
   name : "Leroy",
   species : "Beagle",
   mass : 14,
   age : 5
};

let tardigrade = {
   name : "Almina",
   species : "Tardigrade",
   mass : 0.0000000001,
   age : 1
};

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

let arrayOfAnimals = [superChimpOne,salamander,chimpTwo,beagle,tardigrade];

for(let i = 0; i < arrayOfAnimals.length; i++){
   arrayOfAnimals[i]["astronautID"] = Math.trunc((Math.random() * 10) + 1);
    
 }

 function crewReports(arrayOfAnimals){
   let report = '';
   for(let i = 0; i < arrayOfAnimals.length; i++){
      report += '\n'+`${arrayOfAnimals[i].name} is a ${arrayOfAnimals[i].species}. They are ${arrayOfAnimals[i].age} years old and ${arrayOfAnimals[i].mass} kilogram. Their ID is ${arrayOfAnimals[i].astronautID}.`
   }
   return report;
 }

 function fitnessTest(arr){
   
 }

 console.log(crewReports(arrayOfAnimals));
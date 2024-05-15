//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuelLevel = 0;
let numberOfAstronauts = 0;
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  const input = require('readline-sync');
 
  while(isNaN(startingFuelLevel) || startingFuelLevel <= 5000 || startingFuelLevel > 30000){
   
    startingFuelLevel = input.question("Please enter a starting fuel level: ");

  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while(numberOfAstronauts == 0 || numberOfAstronauts > 7){
  numberOfAstronauts = input.question("Please enter a number of Astronauts: ");
  numberOfAstronauts = Number(numberOfAstronauts);
}
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while((startingFuelLevel-100) * numberOfAstronauts >= 0){
  altitude += 50;
  startingFuelLevel -= 100 * numberOfAstronauts;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitude} km.`);

if(altitude >= 2000){
  console.log("Orbit achieved!");
}else{
  console.log("Failed to reach orbit.");
}
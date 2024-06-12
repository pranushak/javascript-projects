// Code your orbitCircumference function here:
let radius = 2000;
function orbitCircumference(){
  return Math.PI(Math.round()* radius * 2);
}

// Code your missionDuration function here:

function missionDuration(orbits,r,s){
  //let radius = 2000;
  let speed = 28000;
  let time = radius/speed;
  return Math.round(time*100)/100;
}
// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let randomIdArr = [];
 for (let i = 0; randomIdArr.length < 3; i++) {
   let index = Math.floor(Math.random() * arr.length);
   if (!randomIdArr.includes(arr[index])) {
     randomIdArr.push(arr[index]);
   }
 }
 return randomIdArr;
}


// Code your oxygenExpended function here:

function oxygenExpended(){

}
// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

 console.log(orbitCircumference());

 console.log(`'The mission will travel km around the planet, and it will take ____ hours to complete.'`)
 
// Code your orbitCircumference function here:

function orbitCircumference(radius){
  return Math.round(2 * Math.PI * radius);
}

// Code your missionDuration function here:

function missionDuration(orbits,radius,speed){
   radius = 2000;
   speed = 28000;
  let time = (orbits * orbitCircumference(radius))/speed;
  return Math.round(time*100)/100;
}

//console.log(`The mission will travel km around the planet, and it will take ____ hours to complete.`)
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

function oxygenExpended(crewMember){
  const duration = missionDuration(3);
  const o2Used = Math.round(crewMember.o2Used(duration) * 1000) / 1000;
  return `${walker.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygen} kg of oxygen.`
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
 let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
 
 let crew= [candidateA,candidateC,candidateE];

 let walker = selectRandomEntry(animals);
 //let duration = missionDuration(3)
 const o2Statement = oxygenExpended(walker);
 console.log(o2Statement);

 console.log(orbitCircumference(5));

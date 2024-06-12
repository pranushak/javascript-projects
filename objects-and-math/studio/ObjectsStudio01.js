// Code your selectRandomEntry function here:
//let randomIdArr = [];
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


// Code your buildCrewArray function here:
function buildCrewArray(ids, candidates){
  let crew = [];
  for(let i = 0; i < ids.length; i++){
    for(let j = 0; j < candidates.length; j++){
      if(ids[i] === candidates[j].astronautID){
        crew.push(candidates[i]);
      }
    }
  }
  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function (hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function (hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function (hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function (hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function (hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function (hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

console.log(selectRandomEntry(idNumbers));

let randomNumbers = selectRandomEntry(idNumbers);
//console.log(buildCrewArray(randomNumbers,animals));

let spaceAnimals = buildCrewArray(randomNumbers,animals);

// Code your template literal and console.log statements:
console.log(`${spaceAnimals[0].name},${spaceAnimals[1].name}, and ${spaceAnimals[2].name}are going to space!`)
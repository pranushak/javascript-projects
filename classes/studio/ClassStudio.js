//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
    
    addScore(newScore) {
       return (this.scores).push(newScore);
    } 
    average() {
        let sum = 0;
        let averageScore = 0
        for (let i = 0; this.scores.length > i; i++){
            sum += this.scores[i];
        }averageScore = Math.round((sum/this.scores.length * 10))/10;
        return averageScore;
    } 
    status(averageTest) {
        averageTest = this.average();
        console.log((averageTest));
        if(averageTest > 90){
           return "Accepted";
        }
        else if (80 <= averageTest && averageTest <= 89){
            return "Reserve";
        }
        else if (70 <= averageTest && averageTest <= 79){
            return "Probationary";
        }
        else {
            return "Rejected";
        } 
    }
}

let bubbaBear = new CrewCandidate ("Bubba Bear", "135 kg", [88, 85, 90]);
let merryMaltese = new CrewCandidate ("Merry Maltese", "1.5 kg", [93, 88, 97]);
let gladGator = new CrewCandidate ("Glad Gator", "225 kg", [75, 78, 62]);
console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
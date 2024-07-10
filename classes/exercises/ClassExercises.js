// Define your Book class here:
class Book{
    constructor(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
        checkOut(uses = 1){
            this.timesCheckedOut += uses;
        }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
   constructor(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discarded){
        super(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discarded);
    }
    dispose(currentYear){
        if(currentYear - this.copyrightDate > 5){
           return this.discarded = 'yes';
        }
    }
}

class Novel extends Book{
    constructor(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discarded){
        super(title, author, copyrightDate, ISBN, pages, timesCheckedOut, discarded);
    }
    dispose(){
        if(this.timesCheckedOut > 100){
            this.discarded = 'yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let dogMan = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");
let catKid = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");

// Code exercises 4 & 5 here:
 dogMan.checkOut(5);
 catKid.checkOut(10)
 catKid.dispose();
 //console.log(dogMan);
 console.log(dogMan.dispose(2024));
 console.log(dogMan.timesCheckedOut);
 console.log(catKid.timesCheckedOut);

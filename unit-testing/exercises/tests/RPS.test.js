const whoWon = require('../RPS.js');
describe("testing whoWon function", 
function(){
    test("should return 'TIE!' when 2 players are equal.",function(){
        let result = whoWon('rock','rock');
        expect(result).toBe("TIE!")
    });
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });
     test("return undefined when players passed other than 'rock','paper','scissors'.",function(){
        let result = whoWon('fun','game');
        expect(result).toBeUndefined();
     })
})
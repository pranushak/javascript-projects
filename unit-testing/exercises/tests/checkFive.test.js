const checkFive = require('../checkFive');
describe("testing checkFive function", 
function(){
    test("returns 'num is less than 5' when num < 5.",
    function(){
        let result = checkFive(2);
        expect(result).toEqual("2 is less than 5.");
    });
    test("returns 'num is greater than 5' when num > 5.",
    function(){
        let result = checkFive(7);
        expect(result).toEqual("7 is greater than 5.");
    });
    test("returns 'num is equal to 5' when num = 5.",
    function(){
        let result = checkFive(5);
        expect(result).toEqual("5 is equal to 5.");
    });
})
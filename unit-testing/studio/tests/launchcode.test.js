// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("value of organization should be 'nonprofit'.",function(){
    let result = launchcode.organization;
    expect(result).toBe("nonprofit");
  });
  test("value of executiveDirector should be 'jeff'.",function(){
    let result = launchcode.executiveDirector;
    expect(result).toBe("jeff");
  });
  test("value of percentageCoolEmployees should be 100.",function(){
    let result = launchcode.percentageCoolEmployees;
    expect(result).toBe(100);
  });
  test("checking value of programsOffered.",function(){
    let result = launchcode.programsOffered;
    expect(result[0]).toBe("Web Development");
    expect(result[1]).toBe("Data Analysis");
    expect(result[2]).toBe("Liftoff");
    expect(result.length).toBe(3);
  });
});
describe("Testing launchOutput().",function(){
  test("When passed a number that is ONLY divisible by 2",function(){
    let result = launchcode.launchOutput(4);
    expect(result).toBe("Launch!")
  });
  test("When passed a number that is ONLY divisible by 3",function(){
    let result = launchcode.launchOutput(9);
    expect(result).toBe("Code!");
  });
  test("When passed a number that is ONLY divisible by 5",function(){
    let result = launchcode.launchOutput(25);
    expect(result).toBe("Rocks!");
  });
  test("When passed a number that is divisible by 2 AND 3",function(){
    let result = launchcode.launchOutput(6);
    expect(result).toBe("LaunchCode!")
  });
  test("When passed a number that is divisible by 3 AND 5",function(){
    let result = launchcode.launchOutput(15);
    expect(result).toBe("Code Rocks!");
  });
  test("When passed a number that is divisible by 2 AND 5",function(){
    let result = launchcode.launchOutput(10);
    expect(result).toBe("Launch Rocks!");
  });
  test("When passed a number that is divisible by 2, 3, AND 5",function(){
    let result = launchcode.launchOutput(30);
    expect(result).toBe('LaunchCode Rocks!');
  });
  test("When passed a number that is NOT divisible by 2, 3, or 5",function(){
    let result = launchcode.launchOutput(7);
    expect(result).toBe("Rutabagas! That doesn't work.");
  })
})
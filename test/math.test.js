// "describe()" -> Testing Suites : containers for various other testing specs
// "it()" -> Testing Specs -> function to write the assertions

const assert = require("assert");
const { sum , div } = require("../src/math");

describe("Test Maths File", () => {
    it("Should return the sum of given two numbers", () => {
        const result = sum(2,4);
        assert.equal(result, 6, "Result should be 6")
    })
    it("if the first arument is 0 then result is zero in division", ()=>{
        const result= div(0,4);
        assert.equal(result,0,"Result should be 0")
    })
    it("if the second arument is 0 then result is zero in division", ()=>{
        const result= div(4,0);
        assert.equal(result,0,"Result should be 0")
    })
    it("if the neither is 0 then result is non zero in division", ()=>{
        const result= div(4,4);
        assert.equal(result,1,"Result should be 1")
    })

})
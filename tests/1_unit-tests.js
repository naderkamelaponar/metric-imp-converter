const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite("convertHandler",()=>{
        test("should correctly read a whole number input.",()=>{
            const no=convertHandler.getNum("321km");
            console.log(no);
            assert.equal(no,321, 'should return 321')
        })
    })    

});
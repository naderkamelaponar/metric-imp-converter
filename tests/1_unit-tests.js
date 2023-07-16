const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite("convertHandler",()=>{
        test("should correctly read a whole number input.",()=>{
            assert.equal(convertHandler.getNum("321km"),321, 'should return 321')
        })
        test("should correctly read a decimal number input.",()=>{
            assert.equal(convertHandler.getNum("370.137l"),370.137, 'should return 370.137')
        })
        
        test("should correctly read a fractional input.",()=>{
            assert.equal(convertHandler.getNum("370/137l"),370/137, 'should return 370/137')
        })

        test("should correctly read a fractional input with a decimal.",()=>{
            assert.equal(convertHandler.getNum("370/13.7l"),370/13.7, 'should return 370/137')
        })
        test("should correctly return an error on a double-fraction (i.e. 3/2/3).",()=>{
            assert.isNull(convertHandler.getNum("3/2/3"),null, 'should return null')
        })
        test("should correctly default to a numerical input of 1 when no numerical input is provided.",()=>{
            assert.equal(convertHandler.getNum("km"),1, 'should return 1')
        })
        test("should correctly read each valid input unit.",()=>{
            assert.equal(convertHandler.getUnit("km"),"km", 'should return km')
        })
        test("should correctly return an error for an invalid input unit.",()=>{
            assert.isNull(convertHandler.getUnit("kmh"),null, 'should return Null')
        })
        test("should return the correct return unit for each valid input unit.",()=>{
            assert.isNotNull(convertHandler.getUnit("gal"),!null, 'should return NOT Null')
        })
        test("should correctly return the spelled-out string unit for each valid input unit.",()=>{
            assert.equal(convertHandler.spellOutUnit("gal"),"gallons", 'should return gallons')
        })
        test("should correctly convert gal to L..",()=>{
            assert.equal(convertHandler.convert(1,"gal"),3.78541 , 'should return 3.78541 liters')
        })
        test("should correctly convert L to gal.",()=>{
            assert.equal(convertHandler.convert(1,"l"),0.26417, 'should return 0.26417 gallons')
        })
        test("should correctly convert mi to km.",()=>{
            assert.equal(convertHandler.convert(1,"mi"),1.60934  , 'should return 1.60934 kilometers')
        })
        test("should correctly convert km to mi.",()=>{
            assert.equal(convertHandler.convert(1,"km"),0.62137  , 'should return 0.62137 miles')
        })
        test("should correctly convert lbs to kg.",()=>{
            assert.equal(convertHandler.convert(1,"lbs"),0.45359   , 'should return 0.45359  kilograms')
        })
        test("should correctly convert kg to lbs.",()=>{
            assert.equal(convertHandler.convert(1,"kg"),2.20462 , 'should return 2.20462  pounds')
        })
    })    

});
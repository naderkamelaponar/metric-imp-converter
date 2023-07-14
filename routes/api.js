'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get('/api/convert?',(req,res,next)=>{
    const {input} =req.query
    const iNo= convertHandler.getNum(input);
    const iUnit=convertHandler.getUnit(input);
    if (!iNo && !iUnit){return res.send("invalid number and unit")}
    if(!iNo){return res.send("invalid number")}
    if(!iUnit){return res.send("invalid unit")}
    const oNo=convertHandler.convert(iNo,iUnit)
    const oUnit= convertHandler.getReturnUnit(iUnit)
    const result= convertHandler.getString(iNo,iUnit,oNo,oUnit)
    return res.send(result)
  })
};

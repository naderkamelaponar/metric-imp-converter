'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get('/api/convert?',(req,res,next)=>{
    const {input} =req.query
    let string="";
    const iNo= convertHandler.getNum(input);
    console.log(iNo)
    if (!iNo){return  res.send("invalid number")}
  
    const iUnit=convertHandler.getUnit(input);
    if (!iUnit){return  res.send("invalid unit")}
    req.data={iNo,iUnit}
    next()
  },(req,res)=>{
    if(req["error"]){
     return  res.send({"string":req["error"]})
    }
    console.log(req.data)
    const iNo=req["data"]["iNo"]
    const iUnit=req["data"]["iUnit"]
    console.log(iNo)
    const oNo=convertHandler.convert(iNo,iUnit)
    const oUnit= convertHandler.getReturnUnit(iUnit)
    const result= convertHandler.getString(iNo,iUnit,oNo,oUnit)
    return res.send(result)
  })
};

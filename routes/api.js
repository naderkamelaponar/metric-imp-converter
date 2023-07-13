'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get('/api/convert?',(req,res)=>{
    const {input} =req.query
    const iNo= convertHandler.getNum(input);
    const iUnit=convertHandler.getUnit(input);
    const oUnit= convertHandler.getReturnUnit(iUnit)
    const iUnitF=convertHandler.spellOutUnit(iUnit)
    const oUnitF=convertHandler.spellOutUnit(oUnit)
    res.send({oUnit,iUnit,iNo,iUnitF,oUnitF})
  })
};

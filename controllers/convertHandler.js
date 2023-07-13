function ConvertHandler() {
  const units=[["gal","l"],["lbs","kg"],["mil","km"]]
  this.getNum = function(input) {
    let result= input.match(/[0-9][\/|.]?[0-9]/g);  
    if (result){
      if (/\//.test(result)){
        result=parseFloat(eval(result[0]))
      }else{
        result=parseFloat(result[0])
      }
    }else{
      result=1
    }
    console.log("getNum",result,'con');
    return result;
  };
  
  this.getUnit = function(input) {
    let result= input.match(/[a-z]+/ig);
    if (result){
      let f=units.filter(a=>{return a.includes(result[0])})
      if (f.length>0)return result[0]
    }
    return null;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result=null;
    let f=units.filter(a=>{return a.includes(initUnit)})
   if (f.length>0){
      f=f[0]
      switch(initUnit){
        case f[0]:
          result=f[1]
          break;
        case f[1]:
          result=f[0]
          break;
        default:
          result=null
          break;
      }
    }
    return result
  };
  const fullUnit={
    "l":"liters",
    "gal":"galons",
    "mil":"miles",
    "km":"kilometers",
    "kg":"kilograms",
    "lbs":"lbs"

  }
  this.spellOutUnit = function(unit) {
    let result =fullUnit[unit];
    return result?result:null;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit){
      case "l":
        result=initNum/galToL
        break;
      case "gal":
        result=initNum*galToL
        break;
      case "mi":
        result=initNum*miToKm
        break;
      case "km":
        result=initNum/miToKm
        break;
      case "lbs":
        result=initNum*lbsToKg
        break
      case "kg":
        result=initNum/lbsToKg
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

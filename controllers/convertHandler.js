function ConvertHandler() {
  const units=[["gal","l"],["lbs","kg"],["mi","km"]]
  //const units=["gal","lbs","km"]
  this.getNum = function(input) {
    let result = /[/]/.test(input) &&/[.]/.test(input)? input.match(/[0-9]+[.]+[0-9]+[/]+[0-9]+[.]+[0-9]*|[0-9]+[/]+[0-9]+[.]+[0-9]*|[0-9]+[.]+[0-9]+[/]+[0-9]*/g) :input.match(/[0-9]+[/]+[0-9]*|[0-9]+[.]+[0-9]*|^[0-9]$/g)
    result=result?result[0]:1;
    result=/[.|/]$/g.test(input)?null:result
    result=result && /[/]/.test(result) && result.match(/[/]/g).length ===1?eval(result):result
    result= (/[/]/.test(result))? null:parseFloat(result)
    return result;
  };
  
  this.getUnit = function(input) {
    let result= input.match(/[a-z]+/ig);
    if (result){
      let f=units.filter(a=>{return a.includes(result[0].toLowerCase())})
      if (f.length>0)return result[0].toLowerCase()
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
    return result.length==1?result.toUpperCase():result
  };
  const fullUnit={
    "l":"liters",
    "gal":"galons",
    "mi":"miles",
    "km":"kilometers",
    "kg":"kilograms",
    "lbs":"lbs"

  }
  this.spellOutUnit = function(unit) {
    let result =fullUnit[unit.toLowerCase()];
    console.log(result,unit)
    return result?result:null;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    console.log(initNum)
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
    return parseInt(result)==result? result:result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const iUnitF=this.spellOutUnit(initUnit)
    const oUnitF=this.spellOutUnit(returnUnit)
    let result={initNum,initUnit:initUnit.length==1?initUnit.toUpperCase():initUnit,returnNum,returnUnit:returnUnit.length==1?returnUnit.toUpperCase():returnUnit, string:`${initNum} ${iUnitF} converts to ${returnNum} ${oUnitF}`};
    console.log(result)
    return result;
  };
  
}

module.exports = ConvertHandler;

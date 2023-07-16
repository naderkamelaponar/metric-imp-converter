function ConvertHandler() {
  const units=[["gal","l"],["lbs","kg"],["mi","km"]]
  this.getNum = function(input) {
    if (!/\d+/g.test(input))return 1
    const pats=[/[0-9]+[/]+[0-9]*/g,
    /\d+[.]\d*/g,
    /\d+[.]+\d+[/]\d+[.]+\d+/g,
    /[0-9]+[/][0-9]+[.]?\d+/g,
    /\d+/g,
    /\d+[.]+\d+[/]+\d+/g]
    let result='';
    
    pats.map((a)=>{
      const f=input.match(a)
      if (f && result.length<f[0].length && f[0].match(/[0-9]+/g).length==input.match(/[0-9]+/g).length){
        result=f[0]
        console.log(f,a)
      }
    })
    console.log(result)
    result=result.includes("/")&&!result.endsWith("/")?eval(result):result
    result= result.includes("/")?null:result;
    return result.includes(".")&& result.endsWith(".")?null:result;
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
    "gal":"gallons",
    "mi":"miles",
    "km":"kilometers",
    "kg":"kilograms",
    "lbs":"pounds"

  }
  this.spellOutUnit = function(unit) {
    let result =fullUnit[unit.toLowerCase()];
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
    return result.toFixed(5)
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const iUnitF=this.spellOutUnit(initUnit)
    const oUnitF=this.spellOutUnit(returnUnit)
    console.log(typeof returnNum)
    let result={initNum,initUnit:initUnit.length==1?initUnit.toUpperCase():initUnit,returnNum:returnNum==parseInt(returnNum)?parseInt(returnNum):parseFloat(returnNum),returnUnit:returnUnit.length==1?returnUnit.toUpperCase():returnUnit, string:`${initNum} ${iUnitF} converts to ${returnNum} ${oUnitF}`};
    return result;
  };
  
}

module.exports = ConvertHandler;

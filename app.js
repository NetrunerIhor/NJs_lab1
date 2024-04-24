function triangle(arg1, argType1, arg2, argType2) {
  // копектність типів аргументів
  if (!['leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'].includes(argType1) ||
  !['leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'].includes(argType2)){
    console.log("Invalid parameter type. Please take from the list: (leg, hypotenuse, adjacent angle, opposite angle ,angle)")
    return "failed"
  }
  // чи не нульові значення 
  if(arg1 <= 0 || arg2  <=0){
    console.log("Parameter values ​​cannot be zero or less than zero!!!")
    return "failed"
  }
  //наявність комбінації 
  if((argType1 === 'hypotenuse' && argType2 === 'hypotenuse')||
    (argType1 == ('adjacent angle'||'opposite angle'||"angle")&& argType2 == ('adjacent angle'||
    'opposite angle'||"angle"))||(argType1 === 'leg' && argType2 === 'angle')||
    (argType1 === 'angle' && argType2 === 'leg')){
      console.log('There is no method for this combination. Select from the list (leg|leg, leg|hypotenuse, leg|adjacent angle, leg|opposite angle, angle|hypotenuse')
      return "failed"
    }
  // розмір кутів 
  if((argType1 == ('adjacent angle'||'opposite angle'||"angle") && arg1 >=90)||
  (argType2 == ('adjacent angle'||'opposite angle'||"angle") && arg2 >=90)){
    console.log('The angle is not sharp!!!')
    return "failed"
  }
  // катет менший за гіпотенузу
  if((argType1 == "hypotenuse"&& argType2 == "leg"&&arg2>=arg1)||(argType1 == "leg"&& argType2 == "hypotenuse"&&arg1>=arg2)){
    console.log('The leg must be smaller than the hypotenuse!!!')
    return "failed"
  }
  if (argType1 == "leg" && argType2 == "leg") {
    const h = Math.sqrt(arg1 * arg1 + arg2 * arg2);
    const alpha = Math.atan(arg1 / arg2)* (180 / Math.PI);
    const beta = Math.atan(arg2 / arg1)* (180 / Math.PI);
    console.log("a = " + arg1);
    console.log("b = " + arg2);
    console.log("c = " + h);
    console.log("alpha = " + alpha);
    console.log("beta = " + beta);
  }
  else if (argType1 == "hypotenuse" && argType2 == "leg") {
    const a = Math.sqrt(arg1 * arg1 - arg2 * arg2);
    const alpha = Math.acos(arg2 / arg1) * (180 / Math.PI);
    const beta = Math.asin(arg2 / arg1) * (180 / Math.PI);
    console.log("a = " + a);
    console.log("b = " + arg2);
    console.log("c = " + arg1);
    console.log("alpha = " + alpha);
    console.log("beta = " + beta);
  }
  else if (argType1 == "leg" && argType2 == "hypotenuse") {
    const b = Math.sqrt(arg2 * arg2 - arg1 * arg1);
    const alpha = Math.asin(arg1 / arg2) * (180 / Math.PI);
    const beta = Math.acos(arg1 / arg2) * (180 / Math.PI);
    console.log("a = " + arg1);
    console.log("b = " + b);
    console.log("c = " + arg2);
    console.log("alpha = " + alpha);
    console.log("beta = " + beta);
  }
  else if (argType1 == "adjacent angle" && argType2 == "leg") {
    // arg1 = arg1;
    const c = arg2 / Math.cos(arg1*(Math.PI/180));
    const a = arg2 * Math.tan(arg1*(Math.PI/180));
    const beta = 90 - arg1;
    console.log("a = " + a);
    console.log("c = " + c);
    console.log("b = " + arg2);
    console.log("alpha = " + arg1);
    console.log("beta = " + beta);
  }
  else if (argType1 == "leg" && argType2 == "adjacent angle") {
    // arg2 = arg2;
    const c = arg1 / Math.cos(arg2*(Math.PI/180));
    const b = arg1 * Math.tan(arg2*(Math.PI/180));
    const alpha = 90 - arg2;
    console.log("a = " + arg1);
    console.log("b = " + b);
    console.log("c = " + c);
    console.log("alpha = " + alpha);
    console.log("beta = " + arg2);
  }
  else if (argType1 == "opposite angle" && argType2 == "leg") {
    // arg1 = arg1 * (Math.PI / 180);
    const c = arg2 / Math.sin(arg1*(Math.PI/180));
    const a = arg2 * Math.tan(arg1*(Math.PI/180));
    const alpha = 90 - arg1;
    console.log("a = " + a);
    console.log("b = " + arg2);
    console.log("c = " + c);
    console.log("alpha = " + alpha);
    console.log("beta = " + arg1);
  }
  else if (argType1 == "leg" && argType2 == "opposite angle") {
    // arg2 = arg2 * (Math.PI / 180);
    const c = arg1 / Math.sin(arg2*(Math.PI/180));
    const b = arg1 * Math.tan(arg2*(Math.PI/180));
    const beta = 90 - arg2;
    console.log("a = " + arg1);
    console.log("b = " + b);
    console.log("c = " + c);
    console.log("alpha = " + arg2);
    console.log("beta = " + beta);
  }
  else if (argType1 == "angle" && argType2 == "hypotenuse") {
    // arg1 = arg1 * (Math.PI / 180);
    const beta = 90 - arg1;
    const a = arg2 * Math.sin(arg1*(Math.PI/180));
    const b = arg2 * Math.cos(arg1*(Math.PI/180));
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + arg2);
    console.log("alpha = " + arg1);
    console.log("beta = " + beta);
  }
  else if (argType1 == "hypotenuse" && argType2 == "angle") {
    // arg2 = arg2 * (Math.PI / 180);
    const alpha = 90 - arg2;
    const a = arg1 * Math.cos(arg2*(Math.PI/180));
    const b = arg1 * Math.sin(arg2*(Math.PI/180));
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + arg1);
    console.log("alpha = " + alpha);
    console.log("beta = " + arg2);
  };

  return "success"
}

triangle(process.argv[2] ,process.argv[3]  , process.argv[4] , process.argv[5] );
// triangle(5, "hypotenuse", 36.87, "angle");
// triangle(3 ,"leg", 4 ,"leg");
// triangle(5 ,"hypotenuse", 4 ,"leg");
// triangle(3 ,"leg", 5 ,"hypotenuse");
// triangle(36.87 ,"adjacent angle", 4 ,"leg")
// triangle(6 ,"leg", 5 ,"hypotenuse");
// triangle(5 ,"leg", 5 ,"hypotenuse");

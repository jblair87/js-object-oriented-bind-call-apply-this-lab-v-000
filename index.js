function justInvoke(fn){
  return 
}
function setThisWithCall(returnsThisAndArgs, bob, age){
  justInvoke.call(returnsThisAndArgs, bob, age);
  this.age = age;
  this.hairColor = hairColor;
}
console.log(new setThisWithCall('Bob', 18).name);

function setThisWithApply(){}
function returnNewFunctionOf(){}

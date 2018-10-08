function justInvoke(){}
function setThisWithCall(fn, thisValue, arg){
  justInvoke.call(fn, thisValue, arg);
  this.age = age;
  this.hairColor = hairColor;
}
console.log(new setThisWithCall('Bob', 18).name);

function setThisWithApply(){}
function returnNewFunctionOf(){}

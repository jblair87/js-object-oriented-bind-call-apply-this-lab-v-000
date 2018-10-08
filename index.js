function justInvoke(){}
function setThisWithCall(returnsThisAndArgs, bob, 18){
  justInvoke.call(returnsThisAndArgs, bob, 18);
  this.age = age;
  this.hairColor = hairColor;
}
console.log(new setThisWithCall('Bob', 18).name);

function setThisWithApply(){}
function returnNewFunctionOf(){}

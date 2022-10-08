function generateNumber() {
  // generate a random integer(hint : Math.random)
  num=Math.floor(Math.random()*100)
  document.querySelector("#number").textContent=num
 ans= checkOddEven(num)
document.querySelector("#odd-even").textContent
}

function checkOddEven(num) {
  // logic for even / odd
  if(num%2==0){
    return "The number is even"
  }
  return "The number is odd"
}

window.onload = function () {
  // add event listeners to the button here
  btn=document.querySelector("#generate-number")
  btn.addEventListener("click",generateNumber)

};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}

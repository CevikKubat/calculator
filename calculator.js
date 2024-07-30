function main(){
  const button0 = document.querySelector("#n0");
  const button1 = document.querySelector("#n1");
  const button2 = document.querySelector("#n2");
  const button3 = document.querySelector("#n3");
  const button4 = document.querySelector("#n4");
  const button5 = document.querySelector("#n5");
  const button6 = document.querySelector("#n6");
  const button7 = document.querySelector("#n7");
  const button8 = document.querySelector("#n8");
  const button9 = document.querySelector("#n9");
  const calculator = document.querySelector("#calculator");
  const screen = document.querySelector("#screen");

  calculator.addEventListener("click", (e) => {
    let target = e.target;
    
    // Assign buttons to variables
    const number = target.getAttribute("data-number");
    const operator = target.getAttribute("data-operator");
    // Display numbers on screen
    if (number !== null){
      screen.textContent += number;
    }
    }
  )
}





























// const add = function(a, b) {
  //   return a + b;
  // };
  
  // const subtract = function(a, b) {
  // 	return a - b;
  // };
  
  // const sum = function(array) {
  //   return array.reduce((acc, curr) => acc + curr, 0);
  // };
  
  // const multiply = function(array) {
  //   return array.reduce((acc, curr) => acc * curr, 1);
  // };
  
  // const power = function(a, b) {
  // 	return Math.pow(a, b);
  // };
  
  // const factorial = function(number) {
  //   let sum = 1;
  //   for (let i = number; i > 0; i--){
  //     sum *= i;
  //   }
  //   return sum;
  // };



main();
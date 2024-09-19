
// Using var, let, and const
var firstName = "ajay";
let lastName = "reddy";
const age = 30;

console.log(firstName); 
console.log(lastName);  
console.log(age);       

//Scope:
function outerFunction() {
    var outerVar = "I'm global";
    
    function innerFunction() {
      let innerVar = "I'm local";
      console.log(outerVar);
      console.log(innerVar);  
    }
    
    innerFunction();
    console.log(outerVar); 
  }
  
  outerFunction();

  //Operators:
  let a = 10, b = 5;
console.log(a + b);  
console.log(a - b);  
console.log(a * b);  
console.log(a / b);  
console.log(a % b);  

//Comparison:
console.log(10 == '10'); 
console.log(10 === '10');
console.log(10 != '5');   
console.log(10 !== '10'); 
console.log(5 > 3);       
console.log(5 <= 5);      


  
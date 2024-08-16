// // Q1
// function CurrentDateandTime(){
//     var d = new Date();
//     document.write(d)
// }
// CurrentDateandTime();


// // Q2
// var firstname = prompt("Input your First Name");
// var lastname = prompt("Input yout Last Name")
// function greets (firstname, lastname){
// alert("Welcome!"  + "   " + firstname +""+ lastname)
// }
// greets(firstname,lastname)

// // Q3
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number")
// function sum(num1,num2){
//     return num1 + num2;
// }

// alert("The sum is: "+  sum(num1,num2))

// Q4
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number")
// var operator = prompt("Enter an Operator")
// function Calculator(num1,num2,operator){
//   if(operator === "+"){
//     document.write(num1 + " "+ operator + " "+  num2 + "=" + (num1 + num2));
//   }
//      else if(operator === "*"){
//     document.write(num1 + " "+ operator + " "+  num2+ "=" + (num1 * num2)) 
//   }
//    else if(operator === "/"){
//     document.write(num1 + " "+ operator + " "+  num2+ "=" + (num1 / num2)) 
//   } 
//   else if(operator === "-"){
//     document.write(num1 + " "+ operator + " "+  num2+ "=" + (num1 - num2)) 
//   } 
//   else if(operator === "/"){  
//     document.write(num1 + " "+ operator + " "+  num2+ "=" + (num1 / num2)) 
//   }
//   else{
//     document.write("Write some input");
//   }
// }
// Calculator(num1,num2,operator);

// Q5

// function square(a){
//     return a * a 
// }
// console.log(square(5))

// Q6
// function factorial(n){
//     if(n === 0 || n === 1){
//         return 1;
//     }else{
//         return n * factorial(n-1)
//     }
// }
// console.log(factorial(4));

// Q7
// let start_number = +prompt("Enter a start number");
// let end_number = +prompt("Enter a end number");
// function count(start_number,end_number){
//     if(start_number> end_number){
//         for(let i = start_number; i> end_number; i--)
//             document.write(i + "<br>")
//     }
//     else if(start_number <= end_number){
//         for(let i = start_number; i<= end_number; i++)
//             document.write(i + "<br>")
//     }
//     else if(start_number === end_number){
//         document.write("both are equal")
//     }
// }
// count(start_number,end_number);

//9 

function areaOfrectangle(width,height){
    return "Area of Rectangle is : "+ width * height;
}
console.log(areaOfrectangle(6,8));
console.log(areaOfrectangle(4,7));

// Q11
function phrase(palindrome){
    return yes
}
console.log("Pass string is palindrome");






//14 
let radius = 2
function calcCricumferece (radius ){
    return "The Cricumference cricle is :" + 2* 3.14*radius
}
console.log(calcCricumferece(6,4));


function area (radius ){
    return "The area Cricle is :" + 3.14*radius*radius
}
console.log(area(6));



var readlinesync = require('readline-sync');

// var name = readlinesync.question('What is your name?');
// console.log(`Hello ${name}`);

// var num = readlinesync.questionInt("Enter number");
// var res = 7 + num;
// console.log(res);

// var age = readlinesync.question("Are you Older than 18 ?");
// var score = 0;
// if (age=='yes') {
//     console.log('You are in');
//     score +=1;
// } else {
//     console.log("Come later");
//     score -=1;
// }
// var age = readlinesync.question("Are you Ready ?");
// if (age=='yes') {
//     console.log('You are in');
//     score +=1;
// } else {
//     console.log("Come later");
//     score -=1;
// }
// console.log(score);

//function

// function addtwonumbers(num1,num2){
//     var sum = num1 + num2;
//     return sum;
// }

// console.log(addtwonumbers(5,2));

// //parameterized func
// var score = 0;
// function answers(question,answers){
//     var res = readlinesync.question(question);
//     if (res==answers) {
//         score+=1;
//     }else{
//         score -=1;
//     }
//     return score;
// }
// answers("Are you ok ? ","yes");
// answers("Are you there ? ","yes");
// console.log("Your score is "+ score);

// // for loops
// var n = readlinesync.question("Enter the total number of questions ");
// for (let i = 0; i < n; i++) {
//     console.log("RAJAT");
// }

// arrays
var list = ["wheat","rice","sugar","salt","tea powder"];
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}
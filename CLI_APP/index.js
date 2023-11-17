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

// // arrays
// var list = ["wheat","rice","sugar","salt","tea powder"];
// for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
// }

// objects
var Person1 = {
    name : "Rajat",
    age : 21,
    colour : "Skin Colour"
}

var Person2 = {
    name : "Raja",
    age : 20,
    colour : "Dark"
}

console.log(Person1.age);
console.log(Person2.age);

console.log(Person1.age>Person2.age);

var res = Person1.age > Person2.age;
if (res==true) {
    console.log("Person 1 Wins");
}else{
    console.log("Person 2 Wins");
}

var personarr = [Person1,Person2];

for (let i = 0; i < personarr.length; i++) {
    console.log(personarr[i].name , personarr[i].colour);
}
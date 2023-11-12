var readlinesync = require('readline-sync');

// var name = readlinesync.question('What is your name?');
// console.log(`Hello ${name}`);

// var num = readlinesync.questionInt("Enter number");
// var res = 7 + num;
// console.log(res);

var age = readlinesync.question("Are you Older than 18 ?");
var score = 0;
if (age=='yes') {
    console.log('You are in');
    score +=1;
} else {
    console.log("Come later");
    score -=1;
}
var age = readlinesync.question("Are you Ready ?");
if (age=='yes') {
    console.log('You are in');
    score +=1;
} else {
    console.log("Come later");
    score -=1;
}
console.log(score);
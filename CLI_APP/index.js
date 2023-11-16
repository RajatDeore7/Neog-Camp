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

//parameterized func
var score = 0;
function answers(question,answers){
    var que1 = readlinesync.question(question);
    if (que1==answers) {
        score+=1;
    }else{
        score -=1;
    }
    return score;
}
 console.log(answers("Are you ok ? ","yes"));


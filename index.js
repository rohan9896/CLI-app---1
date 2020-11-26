const chalk = require('chalk');
var readlineSync = require('readline-sync');


console.log(chalk.bgRed("Hey!! Great to see you here."));

//for gap in b/w the lines
console.log();


var nameOfUser = readlineSync.question(chalk.blue("What is your name?? "));

console.log();

console.log(chalk.underline.bgBlue("Welcome "+nameOfUser));

console.log();

console.log("Lets see how well you know about programming languages :P");

console.log();

console.log("OK "+nameOfUser+" Let's start the quiz.....");

console.log();

var questions = [{
  question : "Which is the most used programming language in the world?",
  answer: "javascript"
},
{
  question : "Which is the most hated programming language?",
  answer: "javascript"
},
{
  question : "Which language is used to make web applications?",
  answer: "javascript"
},
{
  question : "Which language is tanay using in microsoft?",
  answer: "javascript"
}];

var scoreOfUser = 0;

function play(quesnumber,question, answer){
  
  var answerByUser = readlineSync.question("Q"+(quesnumber+1)+". "+question+" ");

  if(answerByUser.toUpperCase() === answer.toUpperCase()){
    scoreOfUser++;
    console.log(chalk.blue.underline.bold("Correct!!"));
  }
  else{
    console.log(chalk.red.underline.bold("Wrong :/"));
    console.log("Correct answer is", answer)
  }

  console.log("SCORE:",scoreOfUser)

}

for(var i = 0; i < questions.length; i++){
  var current = questions[i];
  play(i, current.question, current.answer);
  console.log();
}

console.log();

console.log(chalk.green("Your final score is", scoreOfUser));

var leaderBoard = [
  {
    name: "Tanay Pratap",
    score: 4
  },
  {
    name: "Akshay Saini",
    score: 4
  },
  {
    name: "Hitesh Choudhary",
    score: 3
  },
  {
    name: "Rachit Jain",
    score: 3
  },
  {
    name: "Varun Mayya",
    score: 2
  }
];

console.log();

console.log(chalk.underline.bgRed("------------LEADERBOARD--------------"));

for(var i = 0; i < leaderBoard.length; i++){
  var current = leaderBoard[i];
  console.log((i+1)+". "+current.name+" -> "+current.score);
}

console.log();

var shouldBeOnLeaderboard = false;

for(var i = 0; i < leaderBoard.length; i++){
  var currentScore = leaderBoard[i].score;
  if(scoreOfUser > currentScore){
    shouldBeOnLeaderboard = true;
    break;
  }
}


if(shouldBeOnLeaderboard === true){
  console.log("Congrats! You deserve a place in leaderBoard, send me a ss at twitter - @gupta1rohan and i'll update the leaderboard");
}
else{
  console.log("Better Luck next time!")
}




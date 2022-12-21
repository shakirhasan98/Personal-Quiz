var readlineSync = require("readline-sync");
var score = 0;
console.log("Welcome to Shakir's Quiz");
var userName = readlineSync.question("Enter your name here : ")

userMessage = ("Hello " +userName +  " Lets get started");

console.log(userMessage)

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are right!!")
    score = score + 1
  } else {
    console.log("You are Wrong");
  }

}

var questions = [{
  question: "where am i from?",
  answer: "mangalore"
}, {
  question: "where do i live now?",
  answer: "saudi"
}, {
  question: "Whats my Fav sport?",
  answer: "football"

}]

for(i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Your total score is :",score)

console.log("Thank you for participating, Have a nice day!!!");
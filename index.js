var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name ?   ");
console.log("Welcome " + userName + " to ---- Do you know Mobashir ? ----");

let score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Great! You are right! 😎");
    score = score + 1;
    console.log("-------👇👇👇👇------");
    console.log("Curent score --> ", score);
  } else {
    console.log("Not quite right 😑");
    console.log("-------👇👇👇👇------");
    console.log("Curent score --> ", score);
  }
}

const questions = [
  {
    question: "Where do live ? ",
    answer: "Gaya",
  },
  {
    question: "My favourite superhero would be ? ",
    answer: "Spiderman",
  },
  {
    question: "What is my hobby ?",
    answer: "Drawing",
  },
  {
    question: "Which programming language I love the most ? ",
    answer: "Javascript",
  },
  {
    question: "What is my favourite food ? ",
    answer: "Biryani",
  },
];

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log(
  "That was awesome and you scored : ",
  score,
  "Out of ->",
  questions.length
);

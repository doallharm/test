const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  // Add more questions here
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

function startQuiz() {
  showQuestion(currentQuestionIndex);
}

function showQuestion(questionIndex) {
  const question = questions[questionIndex];
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = "";
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer.correct));
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(correct) {
  if (correct) {
    // Implement logic for correct answer
    alert("Correct!");
  } else {
    // Implement logic for incorrect answer
    alert("Incorrect!");
  }
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    // Quiz is finished
    alert("Quiz finished!");
  }
}

startQuiz();
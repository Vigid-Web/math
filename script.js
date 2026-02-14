const questions = [
    {
        question: "Simplify the expression: 3x + 2x - 4x",
        options: ["5x", "x", "0", "1x"],
        correctAnswer: "x"
    },
    {
        question: "Evaluate the expression: 2y + 3 when y = 2",
        options: ["7", "10", "5", "8"],
        correctAnswer: "7"
    },
    {
        question: "Simplify the expression: 4a - 2a + 3a",
        options: ["5a", "7a", "9a", "a"],
        correctAnswer: "5a"
    },
    {
        question: "Evaluate the expression: 3z - 1 when z = 4",
        options: ["11", "10", "9", "12"],
        correctAnswer: "11"
    },
    {
        question: "Simplify the expression: 5b + 2b - 3b",
        options: ["4b", "7b", "2b", "b"],
        correctAnswer: "4b"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
    nextButton.disabled = false;
}

function showResult() {
    resultText.textContent = `You scored ${score} out of ${questions.length}`;
    resultContainer.classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    loadQuestion();
    nextButton.disabled = true;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', restartQuiz);

loadQuestion();

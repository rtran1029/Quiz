const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
const scoreText = document.getElementById('score');
// console.log(options)

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Which is the only Pokemon that has the special ability to devolve?",
        option1: 'Slowbro',
        option2: 'Clefairy',
        option3: 'Ditto',
        option4: 'Cubone',
        answer: 1,
    },
    {
        question: "Which of these regions did Ash and his friends travel in the Pokemon DP: Battle Dimension series?",
        option1: "Danto",
        option2: "Kanto",
        option3: "Sinnoh",
        option4: "Pallet",
        answer: 3,
    },
    {
        question: "The word 'Pokémon' is an abbreviation of the Japanese term 'Poketto Monsutā'. What is the meaning of this word?",
        option1: "Poke the Monster",
        option2: "Pocket Pet",
        option3: "Pet Monster",
        option4: "Pocket Monsters",
        answer: 4,
    },
    {
        question: "Which of the following is the name of a legendary bird?",
        option1: 'Lapras',
        option2: 'Ho-oh',
        option3: 'Pidgeyotto',
        option4: 'Talonflame',
        answer: 2,
    },
    {
        question: "Which of these Pokemon is a normal type?",
        option1: "Dialga",
        option2: "Pikachu",
        option3: "Wigglytuff",
        option4: "Slowbro",
        answer: 3,
    },
    {
        question: "How heavy is Snorlax",
        option1: "250 kg",
        option2: "870 lbs",
        option3: "1500 lbs",
        option4: "460 kg",
        answer: 4,
    },
];

const CORRECT_BONUS = 10
const MAX_QUESTIONS = 6


startGame = () => {
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    console.log(length.availableQuestions)
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('gameOver.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    options.forEach( option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

options.forEach((option) => {
    option.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset['number'];

        // const classToApply = 'incorrect';
        //     if (selectedAnswer == currentQuestion.answer) {
        //         classToApply = "correct";
        //     }

        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        selectedOption.parentElement.classList.add(classToApply);

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
          }

        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply);
            getNewQuestion();
          }, 1500);

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();

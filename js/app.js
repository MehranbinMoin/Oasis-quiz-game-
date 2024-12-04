/* Peusdocode for my Oasis quiz game:

1. The game will be a 5-question quiz on one of the UK's best bands of all time!
2. You must get at least 4 questions correct in order to win the game.
3. If you get 3 or more questions incorrect, you must start over from the beginning.
4. Each question will have 4 multiple choices that you can choose from.
5. Once you select your answer for each question, you'll have the option to move forward with a 'Next' button at the botton of your quiz container section.
6. After you submit your answer for the fifth question, you'll be redirected to a new screen within the quiz container that states whether you lost the game or won the game. 
    6a. If you won the game, you'll hear a song from Oasis.
    6b. If you lose, the prompt will ask you to 'Start over' and you'll hear a song from Blur.

-----How we're going to display all 5 questions on our quiz-----

1. We need a variable which keeps track of what question we're on.
    This is not something the player needs to see on their end; it's more for the programmer.
2. We need a function to match up the question number to the object in the questions array.
3. We need a function which updates the HTML to show the question to the user.
4. We need a an event listener that displays the first question when you click 'Start'.
5. We need a an event listener that displays the 4 subsequent questions when you click 'Next'.

-----Questions that will appear on quiz-----

Question 1: What is the title of Oasis' first single?
    a. Definitely Maybe
    b. Supersonic
    c. Live Forever
    d. I am the Walrus

Question 2: Which two members of the band are brothers?
    a. Paul and Liam
    b. Paul and Noel
    c. Noel and Liam
    d. Alan and Liam

Question 3: What is rhythm guitarist, Paul Aurthirs', nickname?
    a. Ringo
    b. Guigsy
    c. Paulie
    d. Bonehead

Question 4: What city in the the UK are the band from?
    a. Manchester
    b. Leeds
    c. Brighton
    d. Nottinghamshire

Question 5: What fruit did Liam throw at Noel during their famous fight in 2009?
    a. Apple
    b. Pineapple
    c. Watermelon
    d. Plum

*/

/*-------------------------------- Constants --------------------------------*/

const questions = [
    {
        question: "What is the title of Oasis' first single?",
        a: "Definitely Maybe",
        b: "Supersonic",
        c: "Live Forever",
        d: "I am the Walrus",
        correct: "b"
    },
    {
        question: "Which two members of the band are brothers?",
        a: "Paul and Liam",
        b: "Paul and Noel",
        c: "Noel and Liam",
        d: "Alan and Liam",
        correct: "c"
    },
    {
        question: "What is rhythm guitarist, Paul Aurthirs', nickname?",
        a: "Ringo",
        b: "Guigsy",
        c: "Paulie",
        d: "Bonehead",
        correct: "d"
    },
    {
        question: "What city in the the UK are the band from?",
        a: "Manchester",
        b: "Leeds",
        c: "Brighton",
        d: "Nottinghamshire",
        correct: "a"
    },
    {
        question: "What fruit did Liam throw at Noel during their famous fight in 2009?",
        a: "Apple",
        b: "Pineapple",
        c: "Watermelon",
        d: "Plum",
        correct: "d"
    },

];


/*---------------------------- Variables (state) ----------------------------*/

//Think about variables as things that will 100% change throughout your game.

let currentQuestion = 0
let score = 0


/*------------------------ Cached Element References ------------------------*/

//Think about the cached elements as ALL the different objects that need to be defined on the quiz itself. 

const startButton = document.getElementById('start');
const gameContainer = document.getElementsByClassName('game-container')
const nextButton = document.getElementById('next');
const questionElement = document.getElementById('questions');
const inputOptions = document.getElementsByClassName('answer')
const aLabel = document.getElementById('a_content');
const bLabel = document.getElementById('b_content');
const cLabel = document.getElementById('c_content');
const dLabel = document.getElementById('d_content');



/*-------------------------------- Functions --------------------------------*/

//Start game

function startGame() {
    startButton.style.display = 'none';
    nextButton.style.display = 'flex';
    questionElement.style.display = 'block'
    aLabel.style.display = 'inline'
    bLabel.style.display = 'inline'
    cLabel.style.display = 'inline'
    dLabel.style.display = 'inline'
    inputOptions[0].style.display = 'inline'
    inputOptions[1].style.display = 'inline'
    inputOptions[2].style.display = 'inline'
    inputOptions[3].style.display = 'inline'
    displayQuestion();
}

//Display current question & answers

function displayQuestion () {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    aLabel.textContent = question.a;
    bLabel.textContent = question.b;
    cLabel.textContent = question.c;
    dLabel.textContent = question.d;
}

//Track answers

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answer = selectedAnswer.id;
        if (answer === questions[currentQuestion].correct) {
            score++;
        }
    }
}

//Display next question

function nextQuestion() {
    checkAnswer();
    currentQuestion++
    if(currentQuestion < questions.length) {
        displayQuestion()
    } else {
        endGame();
    }
}

//End game & display result

function endGame() {
    questionElement.style.display = 'none'
    aLabel.style.display = 'none'
    bLabel.style.display = 'none'
    cLabel.style.display = 'none'
    dLabel.style.display = 'none'
    nextButton.style.display = 'none'
    inputOptions[0].style.display = 'none'
    inputOptions[1].style.display = 'none'
    inputOptions[2].style.display = 'none'
    inputOptions[3].style.display = 'none'
    nextButton.style.display = 'none';
    const resultMessage = document.createElement('p')
    if(score >= 4) {
        resultMessage.textContent = "You've won tickets to the Oasis 2025 reunion!"
    } else {
        resultMessage.textContent = "You Silly Billy!! Try again."
    }
    document.querySelector('.game-container').appendChild(resultMessage);
    disableAnswers()
}

function disableAnswers() {
    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach(option => {
        option.disabled = true;
    })
}

//Intro screen that displays only 'Start' button

function introScreen () {
    const gameContainer = document.querySelector('.game-container')
    gameContainer.classList.add('intro')
    questionElement.style.display = 'none'
    aLabel.style.display = 'none'
    bLabel.style.display = 'none'
    cLabel.style.display = 'none'
    dLabel.style.display = 'none'
    nextButton.style.display = 'none'
    inputOptions[0].style.display = 'none'
    inputOptions[1].style.display = 'none'
    inputOptions[2].style.display = 'none'
    inputOptions[3].style.display = 'none'

}

window.onload = introScreen



/*----------------------------- Event Listeners -----------------------------*/

//Think about the buttons that need to be clicked to get the game started and also progress through to the end of the game

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', nextQuestion)


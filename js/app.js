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

Array 1 general questions:

Question 1: What contemporary UK band does Oasis have a heated rivalry with?
        a: U2
        b: The Verve
        c: Radiohead
        d: Blur

Question 2: Which two members of the band are brothers?
        a: Paul and Liam
        b: Paul and Noel
        c: Noel and Liam
        d: Alan and Liam

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

Array 2 music questions:

Question 1: What is the title of Oasis' first single?
        a: Definitely Maybe
        b: Supersonic
        c: Live Forever
        d: I am the Walrus

Question 2: Which Oasis song did Liam Gallagher hate because he thought it sounded like raggae?
        a: Don't Look Back in Anger
        b: Wonderwall
        c: Cigarettes and Alcohol
        d: She's Electric

Question 3: What was Noel's main inspiration for writing 'Don't Go Away?
        a: Liam threatened to leave the band.
        b: Noel's girlfriend of 3 years just left him.
        c: He wrote it for Bonehead's mum, who was just diagnosed with cancer.
        d: Due to Liam's failing relationship with their mother.

Question 4: Who is Sally in the hit song 'Don't Look Back in Anger'?
        a: She's Noel's 5th grade teacher
        b: She's Noel's daughter.
        c: She doesn't exist -- she's a figment of Noel's imagination.
        d: She's Noel's hairdresser.

Question 5: Where was the iconic 1995 album 'Morning Glory' recorded?
        a: Rockfield Studios
        b: Abbey Road Studios
        c: Eden Studios
        d: Headley Grange

*/

/*-------------------------------- Constants --------------------------------*/

const generalQuestions = [
    {
        question: "What contemporary UK band does Oasis have a heated rivalry with?",
        a: "U2",
        b: "The Verve",
        c: "Radiohead",
        d: "Blur",
        correct: "d"
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
        question: "What is rhythm guitarist, Paul Arthurs', nickname?",
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

const musicQuestions = [
    {
        question: "What is the title of Oasis' first single?",
        a: "Definitely Maybe",
        b: "Supersonic",
        c: "Live Forever",
        d: "I am the Walrus",
        correct: "b"
    },
    {
        question: "Which Oasis song did Liam Gallagher hate because he thought it sounded like reggae?",
        a: "Don't Look Back in Anger",
        b: "Wonderwall",
        c: "Cigarettes and Alcohol",
        d: "She's Electric",
        correct: "b"
    },
    {
        question: "What was Noel's main inspiration for writing 'Don't Go Away?",
        a: "Liam threatened to leave the band.",
        b: "Noel's girlfriend of 3 years just left him.",
        c: "He wrote it for Bonehead's mum, who was just diagnosed with cancer.",
        d: "Due to Liam's failing relationship with their mother.",
        correct: "c"
    },
    {
        question: "Who is Sally in the hit song 'Don't Look Back in Anger'?",
        a: "She's Noel's 5th grade teacher",
        b: "She's Noel's daughter.",
        c: "She doesn't exist -- she's a figment of Noel's imagination.",
        d: "She's Noel's hairdresser.",
        correct: "c"
    },
    {
        question: "Where was the iconic 1995 album 'Morning Glory' recorded?",
        a: "Rockfield Studios",
        b: "Abbey Road Studios",
        c: "Eden Studios",
        d: "Headley Grange",
        correct: "a"
    },

];

let questions = [];

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
const topicsElement = document.getElementById('topics')
const instructionsElement = document.getElementById('instructions')
const inputOptions = document.querySelectorAll('.answer')
const aLabel = document.getElementById('a_content');
const bLabel = document.getElementById('b_content');
const cLabel = document.getElementById('c_content');
const dLabel = document.getElementById('d_content');
const topic1Button = document.getElementById('topic1');
const topic2Button = document.getElementById('topic2');

topicsElement.style.display = 'none';

/*-------------------------------- Functions --------------------------------*/

//Start game

function startGame() {
    instructionsElement.style.display = 'none';
    topicsElement.style.display = 'flex';
    startButton.style.display = 'none';
}

function displayTopics(event) {
    if (event.target.id === 'topic1') {
        questions = musicQuestions;
    } else {
        questions = generalQuestions;
    }
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

function displayQuestion() {
    console.log(inputOptions);
    
    inputOptions.forEach((option) => {
        option.checked = false;
    })
    topicsElement.style.display = 'none'
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    aLabel.textContent = question.a;
    bLabel.textContent = question.b;
    cLabel.textContent = question.c;
    dLabel.textContent = question.d;

    disableNextButton();
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
    if (currentQuestion < questions.length) {
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
    const totalQuestions = questions.length;
    const incorrectAnswers = totalQuestions - score;
    const resultMessage = document.createElement('p')
    let isWinner = false;
    if (score >= 4) {
        resultMessage.textContent = `You've won tickets to the Oasis 2025 reunion! You got ${score} correct and ${incorrectAnswers} wrong.`
        isWinner = true;
    } else {
        resultMessage.textContent = `You Silly Billy!! You got ${incorrectAnswers} wrong. Try again.`
        isWinner = false;
    }
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result');
    resultContainer.appendChild(resultMessage)
    const gameContainer = document.querySelector('.game-container')
    gameContainer.innerHTML = '';
    gameContainer.appendChild(resultContainer);
    playSound(isWinner);
}

//Create a function that plays an Oasis song if the player wins and a Blur song if the player loses.

function playSound(isWinner) {
    const winSound = document.getElementById('winSong');
    const loseSound = document.getElementById('loseSong');

    if (isWinner) {
        winSound.play();
    } else {
        loseSound.play();
    }
}

function disableAnswers() {
    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach(option => {
        option.disabled = true;
    })
}

function disableNextButton() {
    nextButton.disabled = true;
    nextButton.style.cursor = 'not-allowed';
}

function enableNextButton() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked')
    if (selectedAnswer) {
        nextButton.disabled = false;
        nextButton.style.cursor = 'pointer';
    }
}

document.querySelectorAll('input[name="answer"]').forEach((radio) => {
    radio.addEventListener('change', enableNextButton);
})

//Intro screen that displays only 'Start' button

function introScreen() {
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
topic1Button.addEventListener('click', displayTopics)
topic2Button.addEventListener('click', displayTopics)



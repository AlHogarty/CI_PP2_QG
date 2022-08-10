const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

}

const questions =[
    {
        question: 'What is 3 + 4',
        answers: [
            { text: '4', correct: false},
            { text: '7', correct: true},
            { text: '34', correct: false},
            { text: '6', correct: false},
        ]
    }
]
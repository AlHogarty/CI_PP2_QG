const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is the capital of France',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Nice', correct: false },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Who was the leading actress in Sister act I and II ?',
        answers: [
            { text: 'Britney Spears', correct: false },
            { text: 'Penélope Cruz', correct: false },
            { text: 'Meryl Streep', correct: false },
            { text: 'Whoopi Goldberg', correct: true }
        ]
    },
    {
        question: 'Who played the lead role in the movie Scarface in 1983?',
        answers: [
            { text: 'Al Pacino', correct: true },
            { text: 'Colin Farell', correct: false },
            { text: 'Daniel Day-Lewis', correct: false },
            { text: 'Clint Eastwood', correct: false }
        ]
    },
    {
        question: 'Which device do we use to look at the stars?',
        answers: [
            { text: 'Periscope', correct: false },
            { text: 'Kaleidoscope', correct: false },
            { text: 'Microscope', correct: false },
            { text: 'Telescope', correct: true }
        ]
    },
    {
        question: 'Who is the father of the atomic bomb?',
        answers: [
            { text: 'Enrico Fermi', correct: false },
            { text: 'Robert Oppenheimer', correct: true },
            { text: 'Albert Einstein', correct: false },
            { text: 'Vannevar Bush', correct: false }
        ]
    },
    {
        question: 'How long is the Great Wall of China?',
        answers: [
            { text: '3000 miles', correct: false },
            { text: '7000 miles', correct: false },
            { text: '5000 miles', correct: false },
            { text: '4000 miles', correct: true }
        ]
    },
    {
        question: 'Who is the largest toy distributor in the world?',
        answers: [
            { text: 'McDonalds', correct: true },
            { text: 'Tesla', correct: false },
            { text: 'Toys R Us', correct: false },
            { text: 'Smyths', correct: false }
        ]
    },
    {
        question: 'Which country is the origin of the cocktail Mojito?',
        answers: [
            { text: 'Mexico', correct: false },
            { text: 'Switzerland', correct: false },
            { text: 'Jamaica', correct: false },
            { text: 'Cuba', correct: true }
        ]
    },
    {
      question: 'In what year was the Berlin wall built?',
      answers: [
          { text: '1961', correct: true },
          { text: '1951', correct: false },
          { text: '1976', correct: false },
          { text: '1948', correct: false }
      ]
    },
    {
      question: 'In which country happened the Orange Revolution between 2004-2005?',
      answers: [
          { text: 'Northern Ireland', correct: false },
          { text: 'Belarus', correct: false },
          { text: 'Egypt', correct: false },
          { text: 'Ukraine', correct: true }
      ]
    },
    {
      question: 'Which American president appears on a one dollar bill?',
      answers: [
          { text: 'Benjamin Franklin', correct: false },
          { text: 'George Washington', correct: true },
          { text: 'George Bush', correct: false },
          { text: 'Fidel Castro', correct: false }
      ]
    },
    {
      question: 'Who is the protagonist in the Last Action Hero film?',
      answers: [
          { text: 'Quentin Tarantino', correct: false },
          { text: 'Robin Williams', correct: false },
          { text: 'Arnold Schwarzenegger', correct: true },
          { text: 'Daniel Radcliffe', correct: false }
      ]
    },
]
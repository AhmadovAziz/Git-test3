// const h1El = document.querySelector('h1')

// h1El.textContent = 'Raqamni top...'
// h1El.style.color = 'green'

// const number = document.querySelector('.number')

// number.textContent = 25
// number.style.color = 'red'
// number.style.backgroundColor = 'yellow'

///////////////////////////////////////////////
const againgBtnEl = document.querySelector('.again')
const checkBtnEl = document.querySelector('.check')
const inputEl = document.querySelector('.guess')
const messageEl = document.querySelector('.message')
const scoreEl = document.querySelector('.score')
const highScoreEl = document.querySelector('.highscore')
const questionEl = document.querySelector('.number')

let score = 20
let highscore = 0
let playing = true
let randomNumber = Math.trunc(Math.random() * 20) + 1
console.log(randomNumber)

const raqamniTekshir = function () {
      const kiritilganRaqam = +inputEl.value
// console.log(kiritilganRaqam)
// Raqam kiritilmaganda
if (!kiritilganRaqam) {
      messageEl.textContent = 'Raqam kiritilmadi!'
}



// To'g'ri raqam kiritilganda

if (playing === true) {
      if (kiritilganRaqam === randomNumber) {
            document.body.style.backgroundColor = 'green'
            questionEl.style.width = '20rem'
            messageEl.textContent = 'G\'olib bo\'ldi'
            playing = false
      
            // score = score + 1
            score++
            scoreEl.textContent = score
      
            if(score>highscore){
                  highscore = score
                  highScoreEl.textContent = highscore
            }
      }
      
      // katta raqam kiritilganda
      if (kiritilganRaqam < randomNumber && kiritilganRaqam > 0) {
            messageEl.textContent = 'kichik raqam'
            score--
            // kichik raqam kiritilganda
      } else if (kiritilganRaqam > randomNumber && kiritilganRaqam > 0) {
            messageEl.textContent = 'katta raqam'
            score--
      }
}

if(score<1){
      score = 0
      scoreEl.textContent = score
      messageEl.textContent = 'Siz yutqazdiz...'
      playing =false
}

scoreEl.textContent = score

questionEl.textContent = kiritilganRaqam
inputEl.value = ''
}

const enterBtn = function (event) {
      // console.log(event)
      if (event.key === 'Enter') {
            raqamniTekshir()
      }
}

const escBtn = function (event) {
      // console.log(event)
      if (event.keyCode === 27) {
            inputEl.value = ''
      }
      }

      const resetHandler = function () {
                  document.body.style.backgroundColor = '#222'
                  questionEl.style.width = '15rem'
                  questionEl.textContent = '?'
                  messageEl.textContent = 'Start guessing...'
                  score = 20
                  scoreEl.textContent = score
                  highScore = 0
                  highScoreEl.textContent = highscore
                  playing = true
                  randomNumber = Math.trunc(Math.random() * 20) + 1
                  console.log(randomNumber)

      }

      againgBtnEl.addEventListener('click',resetHandler)
checkBtnEl.addEventListener('click', raqamniTekshir)
document.addEventListener('keydown', escBtn)
document.addEventListener('keydown', enterBtn)


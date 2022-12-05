//get numbers position from player
let number1 = document.querySelector('.n1').value
let number2 = document.querySelector('.n2').value
let number3 = document.querySelector('.n3').value
let number4 = document.querySelector('.n4').value
let number5 = document.querySelector('.n5').value
let balota = document.querySelector('.n6').value

//get numbers position containers from platyer
let numberPlayer1 = document.querySelector('#n1-container')
let numberPlayer2 = document.querySelector('#n2-container')
let numberPlayer3 = document.querySelector('#n3-container')
let numberPlayer4 = document.querySelector('#n4-container')
let numberPlayer5 = document.querySelector('#n5-container')
let numberPlayer6 = document.querySelector('#n6-container')

//get numbers position from machine
let winnerNum1 = document.querySelector('.n1w')
let winnerNum2 = document.querySelector('.n2w')
let winnerNum3 = document.querySelector('.n3w')
let winnerNum4 = document.querySelector('.n4w')
let winnerNum5 = document.querySelector('.n5w')
let winnerBalota = document.querySelector('.n6w')

//get numbers position container from machine
let machineWinner1 = document.querySelector('#n1-winner-container')
let machineWinner2 = document.querySelector('#n2-winner-container')
let machineWinner3 = document.querySelector('#n3-winner-container')
let machineWinner4 = document.querySelector('#n4-winner-container')
let machineWinner5 = document.querySelector('#n5-winner-container')
let machineWinner6 = document.querySelector('#n6-winner-container')

//attemps
let attemps = document.querySelector('.attemps')
let counter = 0

//btn play
const btnPlay = document.querySelector('#play')

let numbers = []

btnPlay.addEventListener('click', () => {
    randomNumber()
    baloto()
    fillSpaces()
    getUserNumbers()
    updateAttemp()
})

//numbers in baloto are from 1 to 42
function randomNumber() {
    numbers = []
    //numeros no se pueden repetir ni ser igual a 0

    for(let i = 1; i < 6; i++) {

        let generator = Math.floor(Math.random() * 44)

        if (generator === 0 || numbers.includes(generator)) {
            console.log(`El número problema es ${generator}`)
            do {
                generator = Math.floor(Math.random() * 44)
                console.log('Nuevo número generado es ' + generator)
            } while (generator === 0);
        } 

        numbers.push(generator)


        console.log(`${i} equals ${generator}`)
    }
    console.log(numbers)
}

function baloto() {
    let number = Math.floor(Math.random() * 18)

    if(number === 0) {
        do {
            console.log('Number was 0')
            number = Math.floor(Math.random() * 18)
        } while (number === 0);
    }

    numbers.push(number)
}

function fillSpaces() {
    winnerNum1.textContent = numbers[0]
    winnerNum2.textContent = numbers[1]
    winnerNum3.textContent = numbers[2]
    winnerNum4.textContent = numbers[3]
    winnerNum5.textContent = numbers[4] 
    winnerBalota.textContent = numbers[5]
}
function getUserNumbers() {
    number1 = document.querySelector('.n1').value
    number2 = document.querySelector('.n2').value
    number3 = document.querySelector('.n3').value
    number4 = document.querySelector('.n4').value
    number5 = document.querySelector('.n5').value
    balota = document.querySelector('.n6').value
    console.log('Numbers from user saved', {number1, number2, number3, number4, number5, balota})

    checkUserNumbers()

}

function checkCorrectNumbers() {

    defaultAnswer()

    if(number1 == numbers[0]) {
        machineWinner1.setAttribute('id','correct')
    } 
    if(number2 == numbers[1]) {
        machineWinner2.setAttribute('id','correct')
    } 
    if(number3 == numbers[2]) {
        machineWinner3.setAttribute('id','correct')
    } 
    if(number4 == numbers[3]) {
        machineWinner4.setAttribute('id','correct')
    } 
    if(number5 == numbers[4]) {
        machineWinner5.setAttribute('id','correct')
    } 
    if(balota == numbers[5]) {
        machineWinner6.setAttribute('id','correct')
    } 
    
}

function checkUserNumbers() {

    if(number1.length === 0 || number2.length === 0 || number3.length === 0 || number4.length === 0 || number5.length === 0 || balota.length === 0) {
        console.log('Debes rellenar los campos')
    } /* else if(number1.length > 2 || number2.length > 2 || number3.length > 2 || number4.length > 2 || number5.length > 0 || balota.length > 0) {
        console.log('Debes rellenar los campos')
    } */ else {
        checkCorrectNumbers()
        console.log("It's all good")
    }
}

function defaultAnswer() {
    machineWinner1.setAttribute('id','incorrect')
    machineWinner2.setAttribute('id','incorrect')
    machineWinner3.setAttribute('id','incorrect')
    machineWinner4.setAttribute('id','incorrect')
    machineWinner5.setAttribute('id','incorrect')
    machineWinner6.setAttribute('id','incorrect')
}

function updateAttemp() {
    counter += 1
    attemps.textContent = counter
}
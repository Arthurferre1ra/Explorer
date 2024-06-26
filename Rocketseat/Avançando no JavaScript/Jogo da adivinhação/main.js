const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')


    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')

        document.querySelector('.screen2 h2').innerHTML = `Voce acertou em ${xAttempts} tentativas`
    }
    xAttempts++
    
    if (inputNumber < 0) {
        alert('Apenas numeros de 1 a 10 sao aceitos.')
    }
}

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnAgain")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function (){
        screen1.classList.remove('hide')
        screen2.classList.add('hide')
        xAttempts = 1
        inputNumber.value = ""
})
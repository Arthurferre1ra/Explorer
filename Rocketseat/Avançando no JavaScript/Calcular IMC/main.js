//VARIAVEIS
const form = document.querySelector('form')
const peso = document.getElementById('peso')
const altura = document.getElementById('altura')

const modal = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .tittle span')
const btnClose = document.querySelector('.close')

form.onsubmit = function (event) {
    event.preventDefault()

    const weight = peso.value
    const height = altura.value
    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    modalMessage.innerHTML = message
    modal.classList.add('open')
}

btnClose.onclick = () => {
    modal.classList.remove('open')
}

function IMC(weight, height) {
    //CALCULANDO O IMC
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
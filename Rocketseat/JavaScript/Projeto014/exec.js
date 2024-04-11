/*
var nome = prompt("Digite seu nome")
alert(`Olá, ${nome}`)
*/

/*
let n1 = prompt('Digite um numero')
let n2 = prompt('Digite outro numero')
res =  Number(n1) + Number(n2)

alert(`Resultado da soma e: ${res}`)
*/

/*
let n1 = prompt('digite o primeiro numero')
let n2 = prompt('Digite o segundo numero')
let numero1 = Number(n1) 
let numero2 = Number(n2)

let adicao = alert(numero1 + numero2)
let subtracao = alert(numero1 - numero2)
let multiplicacao = alert(numero1 * numero2)
let divisao = alert(numero1 / numero2)
let resto = alert(numero1 % numero2)1
*/

/*
let name = prompt('Digite o seu nome')
let nota1 = prompt('Digite sua primeira nota')
let nota2 = prompt('Digite sua segunda nota')
let nota3 = prompt('Digite usa terceira nota')

let n1 = Number(nota1)
let n2 = Number(nota2)
let n3 = Number(nota3)
let media = (n1 + n2 + n3) / 3

if (media >= 7) {
    alert(`Parabéns, ${name}! Você foi APROVADO com media ${media}!` )
} else {
    alert(`Olá, ${name}! Infelizmente você foi REPROVADO com media ${media}. Mas, não desista, VOCÊ CONSEGUE!`)
}
*/

/*
//array para conseguir guardar e reutilizar em forma de lista
let items = [];

for (let item = 0; item < 10; item++) {
    let itemName = prompt("Digite a fruta desejada " + (item + 1))
    //ATRIBUIR O VALOR NA LET (FOR)
    items[item] = itemName
}
//Imprimir array
alert(items)
*/

/*
let userNumber = prompt("Adivinhe qual numero estou pensando? Esta entra 0 e 10")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

while (Number(userNumber) != randomNumber) {
    userNumber = prompt('Erro, tente novamente')
    xAttempts++
}

alert(`Parabéns! O numero que pensei foi ${randomNumber}. Você advinhou o número em ${xAttempts} tentativas`)
*/

/*
let option 
console.log(option)
let items = []

//ENQUANTO OPTION FOR DIFERENTE DE 3, EXECUTE O PROGRAMA
while (option != 3) {
   option = Number(prompt(`
Olá usuário! Digite o número da opção desejada

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa
`))

// COM SWITCH
switch (option) {
    case 1: 
    let item = prompt("Digite o item que deseja cadastrar")
    items.push(item)
    break

    case 2: 
    if (items.length == 0) {
        alert("Não existem itens cadastrados")
    } else {
        alert(items)
    }
    break

    case 3:
        alert("Tchau!")
        break

        default: 
        alert("Opção inválida. Tente novamente")
}
}

//COM IF ELSE
    if (option == 1) {
        let item = prompt("Digite o nome do item para cadastrar")
        //VAI PUXAR O ITEM PARA ARRAY
        items.push(item)
    } 
    else if (option == 2) {
        if (items.length == 0) {
            alert("Nao existe items cadastrados")
        } else {
            alert(items)
        }
    } else {
        alert("Tchau!")
    }
    console.log(option, items)
}
*/
/*
   const patients = [{
    name: "Luiz",
    age: 18,
    weight: 68,
    height: 1.73
},
    {
    name: "Carlos",
    age: 19,
    weight: 65,
    height: 1.71    
},
    {
    name: "Luccas",
    age: 17,
    weight: 68,
    height: 1.75
}]

const patientsName = []

for(let patient of patients) {
    patientsName.push(patients.name)
}

alert(`${patients[0].name} de idade ${patients[0].age} pesando ${patients[0].weight} e com altura de ${patients[0].height}.`)

alert(`${patients[1].name} de idade ${patients[1].age} pesando ${patients[1].weight} e com altura de ${patients[1].height}.`)

alert(`${patients[2].name} de idade ${patients[2].age} pesando ${patients[2].weight} e com altura de ${patients[2].height}.`)
*/

/*
const patients = [{
    name: "Luiz",
    age: 18,
    weight: 68,
    height: 1.73
},
    {
    name: "Carlos",
    age: 19,
    weight: 65,
    height: 1.71    
},
    {
    name: "Luccas",
    age: 17,
    weight: 68,
    height: 1.75
}]

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
    return `
    Paciente de nome ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}
    `
}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}
*/

/*
let numberOne = prompt("Digite um numero: ")
let numberTwo = prompt("Digite outro numero: ")
let n1 = Number(numberOne)
let n2 = Number(numberTwo)

let soma = alert(`A soma dos numero é igual a ${n1 + n2}`)
let sub = alert(`A subtracao dos numero é igual a ${n1 - n2}`)
let multiplicar = alert(`A multiplicacao dos numero é igual a ${n1 * n2}`)
let divisao = alert(`A divisao dos numero é igual a ${n1 / n2}`)
let resto = alert(`O resto da divisao dos numero é igual a ${n1 % n2}`)

if (soma % 2 === 0) {
    alert('Par')
} else {
    alert('impar')
}

if (n1 == n2) {
    alert('Iguais')
} else {
    alert('Diferentes')
}
*/

/*
let estudents = [
    {
    nome: 'Luiz',
    primeiraNota: 7,
    segundaNota: 7.5
},

{
    nome: 'Carlos',
    primeiraNota: 9,
    segundaNota: 3.5
},

{
    nome: 'Luiz',
    primeiraNota: 7,
    segundaNota: 7.5
}
]

function calculaMedia(primeiraNota,segundaNota) {
    let media = (primeiraNota + segundaNota) / 2
    return media
}

for(let estudent of estudents) {
    mediaindividual = calculaMedia(estudent.primeiraNota, estudent.segundaNota) 
    let aprovadoOuNao = mediaindividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

    alert(`A média de ${estudent.nome} é ${mediaindividual}.
${aprovadoOuNao}`)
}
*/


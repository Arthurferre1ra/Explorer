/*
function callback(nome) {
    console.log('Antes de exc a callback')
    nome()
    console.log('Depois de exec a callback')
}

callback(
    () => {
        console.log('Estou em uma callback')
    }
)
*/
/*
function Person(name) {
    this.name = name
}

const arthur = new Person("Arthur")
const adrielly = new Person("Adrielly")
console.log(arthur)
console.log(adrielly)
*/

/*
let fruit = "banana";
function getFruit(fruit) {
  fruit = "orange";
  return fruit
}

console.log(fruit);
console.log(getFruit(fruit));
*/

/*let phrase = "Eu sou apaixonado por tecnologia desde pequeno"
console.log(phrase.includes("pequeno")) 
*/

/*
let myArray = new Array('Aula de geo', 'Aula de programacao')
console.log(myArray)
*/

/*
console.log([
    'a',
    function() {return "alo"},
    {type: Array}
][1]())
*/

/*
let mundo = "Ola, mundo!"
console.log(Array.from(mundo))
*/

/*
let language = ["Python", "MySQL", "Java"]
// Adiciona um item ao fim
language.push("node.js")
// Adiciona um item no inicio
language.unshift("JavaScript")
// Remove o ultimo item
language.pop()
// Remove o primeiro item
language.shift()
// Selecionar somente alguns elementos do array
console.log(language.slice(2, 4))
// Remover 1 ou mais itens de qualquer posicao do array
language.splice(1, 2)
// Encontar posicao do item
let index = language.indexOf("node.js")

console.log(language)
*/

/*
// Criar novos objetos
let date = new Date('2024-03-27')
console.log(date)
*/

/*
let person = {
    name: "Arthur",
    age: "18",
    course: "computer science"
}
// typeof delete
delete person.course

console.log(person)
*/

// Soma +
// Subtracao - 
// Multiplicacao *
// Divisao /
// Resto da divisao %
// Incremento ++
// Decremento --
// Expotencial **

/*
// Grouping operator ( )
// Prioridade na resolucao
let total = (50 + 10) / 2
console.log(total)
*/

/*
let tres = 3
let seis = 6

// Igual a
console.log(seis == 2)
console.log(tres == '3')

// Diferente de
console.log(seis != 5)
console.log(seis != 6)
*/

// Estritamente igual a ===
// Estritamente diferente de !==

// AND &&
// OR ||
// NOT !

/*
// Operador condicional ternario

let cafe = true
let acucar = true
// valor1 :(se nao) valor2
const cafeBom = cafe && acucar ? 'cafe bom' : 'cafe ruim'
console.log(cafeBom)

let age = 19
const deMaior = age >= 18 ? 'Voce e de maior' : 'Voce e de menor'
console.log(deMaior)
*/

// Operador de String

// comparar = console.log('a' == 'a')
// concatenar = console.log('a' + 'b')

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN

    console.log( NaN ? 'verdadeiro' : 'falso' )
*/

/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

    console.log( Infinity ? 'verdadeiro' : 'falso' )
*/

/*
// De cima para baixo, do mais importante ao menos importante.
//true == 1 && false == 0

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/

/*
let graus = 37.5

if (graus >= 38.5) {
    console.log('VOCE ESTA COM FEBRE!')
} else {
    console.log('Saldavel.')
}
*/

/*
let expression = ''

switch (expression) { // puxa a expressão para o switch
  case 'a': // confere se o valor da expressão é o correto
    console.log('a')
    break // para a execução do switch apenas se verdadeiro
  case 'b':
    console.log('b')
    break
  default: // caso nenhum valor seja o correto, realizará a 
					 //instrução dentro de si.
    console.log('default')
    break
}
*/

/*

// CALCULADORA
function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-': 
        result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        case 'default':
            console.log('nao implementado')
            break
    }
    return result
}
console.log(calculate(5, '/', 5))
*/

/*
function numero(numero = '') {
    if (numero === '') {
        throw 'Numero obrigatorio'
    }
}

console.log(numero)

try {
    numero()
} catch (e) {
    console.log(e)
}

console.log('depois do erro')
*/

//ESTRUTURA DE REPETICAO
//Break === PARAR 
//Continue === Pular um determinado elemento

/*
for(let a = 10; a < 50; a++) {
    if (a === 11) {
        continue;
    }
    console.log(a)
}
*/

/*
//QUANDO NAO SOUBER O MOMENTO EXATO DE PARAR
let i = 0
while (i < 20) {
    console.log(i + ' Adicionando mais UM!')

    i++;
}
*/

/*
//for (of)
let name = 'Arthur'
names = ['Arthur', 'Klebson', 'Cleisson']

for (name of names) {
    console.log(name)
}
*/

//for (in) Loop em cima do objeto
/*
let Arthur = {
    name: 'Arthur',
    age: 18,
    weight: 64.3
}

for (let dados in Arthur) {
    console.log(dados)
    console.log(Arthur[dados])
}
*/
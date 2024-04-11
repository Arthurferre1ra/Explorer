Nessa aula aprendemos:

Como resolver problemas na linguagem de programação;

Como melhorar minha lógica de programação;

1. Identifique o que já sabe e faça!
2. Quebre o grande problema em problemas menores!

- Executar funções
- Variáveis
- Concatenação
- Tipo de dado: string
- Básica de sintaxe

Boas práticas na escrita de variáveis

Em inglês
Sem espaços ou acentuações especiais no nome
Não pode iniciar com número
Utilizar camelCase
ponto e vírgula servem para finalizar uma expressão de código (facultativo)
Aprendemos:

[] Tipo de dado: Number [] typeof [] Operador matemático [] Manipulação de dados [] type conversion (type casting) [] Number() (função construtora para converter um dado em número) [] String() (função construtora para converter um dado em uma string) [] Ordem de precedência dos operadores [] group operator.

Objetos em JS === {}

 const patients = [{
        name: "Carlos",
        age: 18,
        weight: 63.5,
        height: 1.75
},
    {
        name: "Luiz",
        age: 44,
        weight: 68,
        height: 1.61
},
    {
        name: "Alexandre",
        age: 22,
        weight: 68,
        height: 1.58
}]

let patientsName = []
//Para um patient de patients, executar 
for(patient of patients) {
    patientsName.push(patient.name)
}

alert(patientsName)

https://efficient-sloth-d85.notion.site/O-que-aprendemos-73d7163ff756450fb5d507f2aaa6604a
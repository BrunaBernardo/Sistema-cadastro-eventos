console.log ("Sistema de cadastros eventos")


for(let i = 1;i<2; i++){

// inserção da data de nascimento

console.log("Digite sua data de nascimento, so permitimos o cadastro de pessoas acima de 18 anos (Insira a data sem pontos ou traços)")
var dataDeNascimento = 10012003
var dataDeNascimentoNaoPermitida = 18092003


if (dataDeNascimento < dataDeNascimentoNaoPermitida){
    console.log("Cadastro de idade realizado")
} else{
    console.log("Cadastro não pode ser feito por menores de idade.")
}


// inserção da data do evento

console.log("Digite uma data válida para o evento (lembre-se a data não pode ser posterior ao dia atual e não pode ser digitada com traços ou pontos!!)")
DataDoEvento = 15032022
DataNaoPermitida = 18092021


if (DataDoEvento < DataNaoPermitida){
    console.log("Data Válida")

} else {
    console.log("A data NÃO pode ser posterior ao dia atual, ela não esta válida")
}



// listagem e contagem de participantes 

console.log("Insira a quantidade de participantes no seu evento.")
var participantes = 15

if (participantes<100){
    console.log("Quantidade de participantes é válida")

} else{

    console.log("Existem muitas pessoas no seu evento, quantidade exedida!")
}
console.log("Digite o nome dos "+participantes+" participantes:");
for(let contador = 0;contador<=participantes; contador++){
console.log ("participante "+contador+" cadastrado com sucesso.")
}
console.log ("Seu evento foi cadastrado com sucesso.")
}
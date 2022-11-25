let num = [2, 5, 8, 7, 6, 4, 3, 1, 9]
num.sort() // ordena de forma crescente o vetor

/*
num.push(10)      // adicionar na ultima posicao do vetor
num.sort()        // ordena de forma crescente o vetor
*/
/*
console.log(num)
console.log(`Nosso vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor eh o ${num[0]}`)

for(let pos = 0 ; pos < num.length ; pos++){
    console.log(num[pos])
}
*/

for(let pos in num){
    console.log(`A posicao ${pos} contem o valor ${num[pos]}`)
}

let x = 5
let procura = num.indexOf(x) // procura a posicao do valor inscrito na variavel

if(procura == -1){ // -1 eh sempre a representacao para posicao inexistente
    console.log('Valor nao encontrado!')
} else{
    console.log(`O valor ${x} esta na posicao ${procura} do vetor`)
}



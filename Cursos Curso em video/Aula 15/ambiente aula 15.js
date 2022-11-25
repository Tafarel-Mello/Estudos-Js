let num = [10, 5, 2, 44 ,1 ,7]
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
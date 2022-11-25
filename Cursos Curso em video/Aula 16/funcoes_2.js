// calculo de fatorial
// 5! = 5 x 4 x 3 x 2 x 1 => fatorial de 5 = 120

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){ // c = contador que inicia com o valor de n
        fat *= c
    }
    return fat
}

console.log(fatorial(5))


// forma recursiva de chamar funcao - funcao chama ela mesma internamente
// 5! = 5 x 4 x 3 x 2 x 1
// mas tambem
// 5! = 5 x 4!
// e tambem
// 4! = 4 x 3!
function fatorial2(n){
    if(n == 1){
        return 1
    } else{
        return n * fatorial2(n-1)
    }
}

console.log(fatorial2(5))
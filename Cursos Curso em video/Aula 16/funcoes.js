function parImpar(n){
    if(n%2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

// parImpar(57) // chamada da funcao

console.log(parImpar(524)) // impressao direto sem precisar atribuir a uma var

function soma(n1=0, n2=0){ // so iniciar o parametro com zero, evita NaN caso um parametro seja omitido
    return n1 + n2
}

console.log(soma(2, 7))

let v = function(x){ // funcao atribuida em uma variavel
    return x*2
}

console.log(v(5))
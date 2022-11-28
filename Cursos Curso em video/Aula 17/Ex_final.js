let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){ // teste para saber se o valor inserido eh um numero valido
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l) {
    // -1 significa que o valor nao tem index, logo, nao consta na lista
    if (l.indexOf(Number(n)) != -1) { 
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo OK!')
    }else{
        window.alert('Valor invalido ou ja inserido!')
    }
}
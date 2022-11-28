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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' // comando para limpar input caso queira inserir mais valores

    }else{
        window.alert('Valor invalido ou ja inserido!')
    }
    num.value = '' // comando para limpar o input depois de cada interacao
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0


        for(let pos in valores)
        { // encontra maior e menor
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores foi de ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores difitados foi de ${media}.</p>`
    }
}
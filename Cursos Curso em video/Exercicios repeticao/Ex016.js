function calcular() {
    var n1 = document.getElementById('txtvalor1')
    var n2 = document.getElementById('txtvalor2')
    var n3 = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
        window.alert('[OUPS] Por favor, digite os dados necessarios!')
        res.innerHTML = 'Impossivel contar! Insira os dados novamente.'
    } else{
        res.innerHTML = '<br> Contando: <br>'
        let inicio = Number(n1.value)
        let fim = Number(n2.value)
        let passo = Number(n3.value)

        if(passo == 0){
            window.alert('Passo invalido! Sera considerado passo de 1')
            passo = 1
        }

        if(inicio < fim){
            // contagem crescente
            for(let x = inicio; x <= fim; x += passo){
                res.innerHTML += `${x} \u{1F449}` // formatacao de emoji via Js
            }
        } else{
            // contagem decrescente
            for(let x = inicio; x >= fim; x -= passo){
                res.innerHTML += `${x} \u{1F449}` // formatacao de emoji via Js
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
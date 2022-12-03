function calcular(tipo, valor){
    
    if(tipo === 'acao'){
        if(valor === 'c'){ // logica do clear
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.'){
            document.getElementById('resultado').value += valor
        }
        if(valor === '='){
            let valor_campo = eval(document.getElementById('resultado').value) // comando eval transforma a string em uma expressao Js para o interpretador sem necessidade de transformar
            document.getElementById('resultado').value = valor_campo
        }

    }else if(tipo === 'valor'){
        // let valor_campo = document.getElementById('resultado').value -> recuperando valor e usando variavel
        // document.getElementById('resultado').value = valor_campo + valor
        document.getElementById('resultado').value += valor // ja atribui sem a necessidade de recuperar antes
    }
}
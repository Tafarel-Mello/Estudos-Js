function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''

        var img = document.createElement('img') // criar elemento no HTML dinamicamente
        img.setAttribute('id', 'foto') // atribui o id ao elemento

        if(fsex[0].checked){ // teste do botao selecionado
            genero = 'Homen'
            if(idade >= 0 && idade < 10){
                // crianca
                img.setAttribute('src', 'imagens/bebe_menino.jpg')
            } else if(idade < 22){
                // jovem
                img.setAttribute('src', 'imagens/jovem_homem.jpg')
            } else if(idade < 50){
                // adulto
                img.setAttribute('src', 'imagens/adulto_homem.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso_homem.jpg')
            }
        } else if(fsex[1].checked){ // teste do botao selecionado
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // crianca
                img.setAttribute('src', 'imagens/bebe_menina.jpg')
            } else if(idade < 22){
                // jovem
                img.setAttribute('src', 'imagens/jovem_mulher.jpg')
            } else if(idade < 50){
                // adulto
                img.setAttribute('src', 'imagens/adulto_mulher.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso_mulher.jpg')
            }

        }
        res.style.textAlign = 'center' // propriedade CSS via Js
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img) // inserir a imagem no HTML via Js
    }
}
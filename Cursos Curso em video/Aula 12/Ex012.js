var agora = new Date() // instancia data real
var hora = agora.getHours() // busca a hora no momento
console.log(`Agora sao exatamente ${hora} horas`)
if(hora < 12){
    console.log('Bom dia!')
} else if(hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
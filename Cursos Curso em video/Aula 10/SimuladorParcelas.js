// funcao utilizada para calculo de parcelas no projeto "Empreste Facil"


function simular6()
{
    var taxa = 0.04
    var parcela6 = 6
    var valor = document.getElementById('valorSolicitado')
    var n1 = Number(valor.value)
    var simula6 = document.getElementById('simul6x')

    // Formula: PMT = [PV. (1 + i) ^ n] i / [(1 + i) ^ n - 1]

    var elemento1 = n1 * ((1 + taxa) ** parcela6) * taxa
    var elemento2 = ((1 + taxa) ** parcela6) - 1

    var res6 = elemento1 / elemento2


    simul6x.innerHTML = `6 x de ${res6.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' }) }`
}
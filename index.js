function formatMoney(value){
    value = Math.ceil(value*100) / 100 //arredondando valores
    value = value.toFixed(2)
    return "R$" + value
}

function update(){
    //pegando os valores do HTML
    let conta = Number(document.getElementById('yourBill').value)
    let contaPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    
    //Realizando os calculos
    let gorjetaValue = conta * (contaPercent / 100)
    let contaTotal = conta + gorjetaValue
    let qtdePeossoas = contaTotal / split

    //retorando os valores para o HTML
    document.getElementById('tipPercent').innerHTML = contaPercent + '%'

    document.getElementById('tipValue').innerHTML = formatMoney(gorjetaValue)

    document.getElementById('totalWithTip').innerHTML = formatMoney(contaTotal)

    document.getElementById('splitValue').innerHTML = split

    document.getElementById('billEach').innerHTML = formatMoney(qtdePeossoas)

    //btn atualzia tela
    document.getElementById('refreshButton').addEventListener("click",function(){
        location.reload()
    })
}
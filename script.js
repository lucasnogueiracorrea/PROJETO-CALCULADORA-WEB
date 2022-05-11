var n1 = window.document.getElementById('txt1')
var n2 = window.document.getElementById('txt2')
var resposta = window.document.querySelector('span')

function soma(){
    resposta.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}
function subtracao(){
    resposta.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}
function divisao(){
    resposta.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}
function multiplicacao(){
    resposta.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}
var a = "";
var n = "";
var y = "";

function digito(kk) {
    var x = document.getElementById('caixa')
    a = x.value
    n = a + kk
    x.value = n
}

function limpar() {
    var x = document.getElementById('caixa')
    x.value = ""
}

function igual() {
    var x = document.getElementById('caixa')
    a = ""
    n = eval(x.value)
    x.value = n
}
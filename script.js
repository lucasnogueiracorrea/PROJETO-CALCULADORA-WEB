function calculadora(){
    var n1 = Number(window.document.getElementById('txt1'))
    var n2 = Number(window.document.getElementById('txt2'))
    var txt3 = Number(window.document.getElementById('txt3'))
    var res
    var btn = window.document.getElementById('btn')
    

    function somar(){
        res = n1 + n2
    }
    function subtrair(){
        res = n1 - n2
    }
    function dividir(){
        res = n1 / n2
    }
    function multiplicar(){
        res = n1 * n2
    }

    function check(){
        if(txt3 == 1){
            somar()
        } else if(txt3 == 2){
            subtrair()
        } else if(txt3 == 3){
            dividir()
        } else if(txt3 == 4){
            multiplicar()
        } else if(txt3 >4){
            alert("Você digitou uma opção inválida.")
        }
    }

    btn.addEventListener('click' function{
        check()
        

    })
    
}    

calculadora();
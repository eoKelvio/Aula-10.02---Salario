var element = document.getElementById("botao");
element.addEventListener("click", calcular);

var reset = document.getElementById("resetar")
reset.addEventListener("click", limpa_entradas)


function limpa_entradas(){
    var sala = document.getElementById("sala")
    sala.value = ""
    var dpnt = document.getElementById("dpnt")
    dpnt.value = ""
    document.getElementById("sb").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
    document.getElementById("in").innerHTML = ""
    document.getElementById("ir").innerHTML = ""
    document.getElementById("vt").innerHTML = ""
    document.getElementById("sl").innerHTML = ""
}


function calcular() {

    var final
    var irrf_res
    var irrf
    sala = Number(document.getElementById('sala').value)
    dpnt = Number(document.getElementById('dpnt').value)
    vale = document.getElementById('vale')


    switch (true) {
        case sala <= 1212:
            var inss = sala * 0.06
            break;
        case sala > 1212 && sala <= 2427:
            var inss = sala * 0.09
            break;
        case sala > 2427 && sala <= 3641:
            var inss = sala * 0.12
            break;
        case sala > 3641 && sala <= 7087:
            var inss = sala * 0.14
            break;
        case sala > 7087:
            var inss = 7087 * 0.14
            break;
    }



    if (vale.checked) {
        vale = sala * 0.06
    }

    else {
        vale = 0
    }

    var irrf_res = sala-(inss+189.59*dpnt) 
    switch (true) {

        case irrf_res <= 1903:
            var irrf = 0
            break;
        case irrf_res > 1903 && irrf_res <= 2826: 
            var irrf = (irrf_res*0.075)-142.80 
            break;
        case irrf_res > 2826 && irrf_res <= 3751: 
            var irrf = (irrf_res*0.15)-354.80
            break;
        case irrf_res > 3751 && irrf_res <= 4664:
            var irrf = (irrf_res*0.225)-636.13
            break;
        case irrf_res > 4664:   
            var irrf = (irrf_res*0.275)-869.36
            break;
    }

    var final = sala - inss - vale - irrf
    document.getElementById("sb").innerHTML = sala.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
    document.getElementById("in").innerHTML = inss.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
    document.getElementById("ir").innerHTML = irrf.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
    document.getElementById("vt").innerHTML = vale.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
    document.getElementById("sl").innerHTML = final.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

}




//


//

//


//




/*Dedução mensal por dependente

2015 (a partir do mês de abril) e posteriores
189,59*/

/*Tabelas de incidência mensal


Até 1.903,98
-
-

De 1.903,99 até 2.826,65
7,5%
142,80

De 2.826,66 até 3.751,05
15%
354,80

De 3.751,06 até 4.664,68
22,5%
636,13

Acima de 4.664,68
27,5%
869,36 */

/*Vale
6% */
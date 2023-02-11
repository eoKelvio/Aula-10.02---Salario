var sala = document.getElementById('sala')
var dpnt = document.getElementById('dpnt')
var vale = document.getElementById('vale')
var inss
var irrf
var final


function calcular() {
    switch (true) {
        case sala <= 1903:
            irrf_res = 0
            break;
        case sala > 1903 && 2826:


    }




    switch (true) {
        case sala <= 1212:
            var final = sala - (sala * 0.075) - (sala * 0.06)
            break;
        case sala > 1212 && sala <= 2427:
            inss = sala * 0.09
            vale = sala * 0.06
            var final = sala - (inss) - (vale) - (irrf_res) - (dpnt * 189, 59)
            break;
        case sala > 2427 && sala <= 3641:
            var inss = (sala * 0.12) - (sala * 0.06) - (irrf_res) - (dpnt * 189, 59)
            break;
        case sala > 3641 && sala <= 7087:
            var inss = (sala * 0.14) - (sala * 0.06) - (irrf_res) - (dpnt * 189, 59)
            break
    }

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
/* ==========================================================================

Caso 1. Los cuatro Atletas.
De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente 
detrás de B, y D ha llegado en medio de A y C. ¿Podría usted calcular 
el orden de llegada?
==========================================================================
*/
/*Respuesta
B ->1
C ->2
D ->3
A ->4
*/

var ordenLlegada ={
    A:0,
    B:0,
    C:0,
    D:0,
    resultado: function () {
        if (ordenLlegada.C > ordenLlegada.B &&
            ordenLlegada.D > ordenLlegada.B &&
            ordenLlegada.D > ordenLlegada.C &&
            ordenLlegada.D < ordenLlegada.A) {
                return true;
        } 
            return false;
        },
        
        intervalo: setInterval(function(){
            ordenLlegada.A = Math.ceil(Math.random()*4)
            ordenLlegada.B = Math.ceil(Math.random()*4)
            ordenLlegada.C = Math.ceil(Math.random()*4)
            ordenLlegada.D = Math.ceil(Math.random()*4)

            if (ordenLlegada.resultado()== true) {
                clearInterval(ordenLlegada.intervalo);
                console.log("atleta A", ordenLlegada.A)
                console.log("atleta B", ordenLlegada.B)
                console.log("atleta C", ordenLlegada.C)
                console.log("atleta D", ordenLlegada.D)
            }
        })
          
    }



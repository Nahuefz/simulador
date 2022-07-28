alert("¡Bienvenido al promediador de notas!")

var parcial = parseInt(prompt("Ingrese la nota de su parcial"))
var final = parseInt(prompt("Ingrese la nota de su final"))
var promedio = (parcial + final) / 2
function promediador(){
    if(promedio >= 6){
        alert("Felicitaciones cuatrimestre aprobado.")
    }else{
        alert("Estas desaprobado, deberas recursar la materia.")
    }
}

promediador()

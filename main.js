alert("¡Bienvenido al promediador de notas!")

var tp = parseInt(prompt("Ingrese la nota de su primer TP"))
while(isNaN(tp)){
    alert("Caracter no valido")
    tp = parseInt(prompt("Ingrese la nota de su primer TP"))
}

var parcial = parseInt(prompt("Ingrese la nota de su primer parcial"))
while(isNaN(parcial)){
    alert("Caracter no valido")
    parcial = parseInt(prompt("Ingrese la nota de su primer parcial"))
}

var final = parseInt(prompt("Ingrese la nota de su final"))
while(isNaN(final)){
    alert("Caracter no valido")
    final = parseInt(prompt("Ingrese la nota de su final"))
}

var promedio

function promediador(){
    promedio = parseInt((tp + parcial + final) / 5)
    if(promedio >= 6){
        alert(`Felicitaciones cuatrimestre aprobado con ${promedio}`)
    }else{
        alert(`Desaprobaste el cuatrimestre con ${promedio}`)
    }
}

promediador()


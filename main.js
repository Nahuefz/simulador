alert("¡Bienvenido al promediador de notas!")

let tp = parseInt(prompt("Ingrese la nota de su primer TP"))
while(isNaN(tp)){
    alert("Caracter no valido")
    tp = parseInt(prompt("Ingrese la nota de su primer TP"))
}

let parcial = parseInt(prompt("Ingrese la nota de su primer parcial"))
while(isNaN(parcial)){
    alert("Caracter no valido")
    parcial = parseInt(prompt("Ingrese la nota de su primer parcial"))
}

let final = parseInt(prompt("Ingrese la nota de su final"))
while(isNaN(final)){
    alert("Caracter no valido")
    final = parseInt(prompt("Ingrese la nota de su final"))
}

let promedio

function promediador(){
    promedio = parseInt((tp + parcial + final) / 5)
    if(promedio >= 6){
        alert(`Felicitaciones cuatrimestre aprobado con ${promedio}`)
    }else{
        alert(`Desaprobaste el cuatrimestre con ${promedio}`)
    }
}

promediador()


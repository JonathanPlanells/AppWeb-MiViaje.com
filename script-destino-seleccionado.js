// document.getElementById('infoIN').value = localStorage.getItem("fechaCheckIn");

// Iteraciones para consumo de API

// Iteración para rellenar la fecha de Cehck In
let elemIN = document.getElementsByClassName('cajaIn');
for (let n = 0; n < elemIN.length; ++n) {
    elemIN[n].value = localStorage.getItem("fechaCheckIn");
}

// Iteración para rellenar la fecha de Cehck Out
let elemOUT = document.getElementsByClassName('cajaOut');
let x;
for (x = 0; x < elemOUT.length; ++x) {
    elemOUT[x].value = localStorage.getItem("fechaCheckOut");
}

// Condicional para selec -> Adultos, si se entra directamente escoger un destino sin utilizar formulario
if (window.localStorage.getItem('numeroAdultos') != undefined){
    // Iteración para rellenar el numero de huespedes 
    let elemNumAdultos = document.getElementsByClassName('select2');
    for(let a = 0; a < elemNumAdultos.length; ++a){
        elemNumAdultos[a].value = localStorage.getItem("numeroAdultos")
    }
}

if (window.localStorage.getItem('numeroHabitaciones') != undefined){
    // Iteración para rellenar el numero de huespedes 
    let elemNumAdultos = document.getElementsByClassName('select3');
    for(let a = 0; a < elemNumAdultos.length; ++a){
        elemNumAdultos[a].value = localStorage.getItem("numeroHabitaciones")
    }
}



// Condicional para selec -> Destino, si se entra directamente escoger un destino sin utilizar formulario
if (window.localStorage.getItem('ciudadSeleccion') != undefined) {
    document.getElementById('ciudad').value = localStorage.getItem("ciudadSeleccion")
}


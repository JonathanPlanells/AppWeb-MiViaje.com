// document.getElementById('infoIN').value = localStorage.getItem("fechaCheckIn");

// Iteraciones para consumo de API

// Iteración para rellenar la fecha de Cehck In

let elemIN = document.getElementsByClassName('cajaIn');
for (let n = 0; n < elemIN.length; ++n) {
    elemIN[n].value = localStorage.getItem("fechaCheckIn");
}

// Iteración para rellenar la fecha de Check Out
let elemOUT = document.getElementsByClassName('cajaOut');
let x;
for (x = 0; x < elemOUT.length; ++x) {
    elemOUT[x].value = localStorage.getItem("fechaCheckOut");
}

// Condicional para selec -> Adultos, si se entra directamente escoger un destino sin utilizar formulario
if (window.localStorage.getItem('numeroAdultos') != undefined) {
    // Iteración para rellenar el numero de huespedes 
    let elemNumAdultos = document.getElementsByClassName('select2');
    for (let a = 0; a < elemNumAdultos.length; ++a) {
        elemNumAdultos[a].value = localStorage.getItem("numeroAdultos")
    }
}

if (window.localStorage.getItem('numeroHabitaciones') != undefined) {
    // Iteración para rellenar el numero de huespedes 
    let elemNumAdultos = document.getElementsByClassName('select3');
    for (let a = 0; a < elemNumAdultos.length; ++a) {
        elemNumAdultos[a].value = localStorage.getItem("numeroHabitaciones")
    }
}

// Condicional para selec -> Destino, si se entra directamente escoger un destino sin utilizar formulario
if (window.localStorage.getItem('ciudadSeleccion') != undefined) {
    document.getElementById('ciudad').value = localStorage.getItem("ciudadSeleccion")
}


async function obtenerHoteles(url) {
    const respuesta = await fetch(url)
    const hoteles = await respuesta.json()
    return hoteles
}


function hoteles_disponibles(hoteles) {
    const cardHotelDisponible = document.getElementById('hoteldisponible')
    let section = "<section>"
    for (let i = 0; i < hoteles.length; i++) {
        const h = hoteles[i]
        section += ` 
                <section class="cajaHotelPrincipal">
                <section class="caja1">
                    <section class="informacion">
                        <div class="cajaText">
                            <p class="txtRD">${h.nombreHotel}</p>
                            <div class="estrellas">
                                <img src="Image/Estrella.svg">
                                <img src="Image/Estrella.svg">
                                <img src="Image/Estrella.svg">
                                <img src="Image/Estrella.svg">
                                <img src="Image/Estrella.svg">
                            </div>
                            <div class="check"><img src="Image/Check.svg"></div>
                            <div class="check2"><img src="Image/Check.svg"></div>
                            <div class="desc">
                                <p class="text2" style="color: black;">Bogotá a 4,02 km del centro.</p>
                                <p class="text3">Cancelación Gratis</p>
                                <p class="text5">Pago en efectivo en el hotel</p>
                            </div>
                        </div>
                    </section>
                    <section class="informacion">
                        <section class="checkIn">
                            <div class="imgCalendarioIN"><img src="Image/Vectorcalendario.svg"></div>
                            <div class="datosCheckIN">
                                <p>Check In</p>
                                <input class="cajaIn" type="date" max="2023-02-22" style="width: 100px;"
                                    onkeydown="return false" value ="${document.getElementById('infoIN').value = localStorage.getItem("fechaCheckIn")}">
                            </div>
                        </section>
                        <section class="checkOut">
                            <div class="imgCalendarioOut"><img src="Image/Vectorcalendario.svg"></div>
                            <div class="datosCheckOut">
                                <p>Check Out</p>
                                <input class="cajaOut" type="date" max="2023-02-22" style="width: 100px;"
                                    onkeydown="return false" value ="${document.getElementById('infoOUT').value = localStorage.getItem("fechaCheckOut")}">
                            </div>
                        </section>
                        <section class="huespedes">
                            <div class="imgHuespedes"><img src="Image/icoHuesped.svg "></div>
                            <div class="datosHuespedes">
                                <p>Huespedes</p>
                                <select class="select2">
                                    <option value="opcion 0">1 Adulto</option>
                                    <option value="opcion 1" selected>2 Adultos</option>
                                    <option value="opcion 2">3 Adultos</option>
                                    <option value="opcion 3">4 Adultos</option>
                                </select>
                            </div>
                            <img class="img3" src="Image/icoHab.svg">
                            <div>
                                <select class="select3" style="width: 80px;">
                                    <option value="opcion 0">1 hab</option>
                                    <option value="opcion 1">2 hab</option>
                                    <option value="opcion 2">3 hab</option>
                                    <option value="opcion 3">4 hab</option>
                                </select>
                            </div>
                        </section>
                        <a href="form-reserva.html"><button>RESERVAR AHORA</button></a>
                    </section>
                </section>
                <div class="caja2">
                    <img src="${h.imagen}">
                </div>
            </section>

        `
    }
    section += "</section>"
    cardHotelDisponible.innerHTML += section
}

async function main() {
    const url = "http://localhost:8080/hoteles"
    const hoteles = await obtenerHoteles(url)
    hoteles_disponibles(hoteles)
}

main()
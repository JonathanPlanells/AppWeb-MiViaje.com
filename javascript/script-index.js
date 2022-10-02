//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// OBTENER EL VALOR DEL SELECT DE CIUDAD
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let select = document.getElementById('ciudad');
select.addEventListener('change', function sel(event) {
    console.log(event.target.value)
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// RELLENO DEL LOCALSTORAGE - INFORMACION QUE PASA DE HTML A HTML
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function passInformacion() {
    let fechaIN = document.getElementById('fechaIN').value;
    localStorage.setItem("fechaCheckIn", fechaIN); // Guardando en el localStorage la fecha del checkIn
    let fechaOUT = document.getElementById('fechaOut').value;
    localStorage.setItem("fechaCheckOut", fechaOUT); // Guardando en el localStorage la fecha del checkOut
    let destinoSelec = document.getElementById('ciudad').value;
    localStorage.setItem("ciudadSeleccion", destinoSelec); // Guardando en el localStorage la ciudad
    let adultosSelec = document.getElementById('numAdult').value;
    localStorage.setItem("numeroAdultos", adultosSelec); // Guardando en el localStorage la num Huespedes
    let habSelec = document.getElementById('numHab').value;
    localStorage.setItem("numeroHabitaciones", habSelec);
    return true;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ESTABLECER LA FECHA DEL CHECK IN Y NO PERMITIR ESCOGER UNA FECHA ANTERIOR
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function verificarFechaIN() {
    let fecha = new Date(); //Fecha actual
    let mes = fecha.getMonth() + 1; //obteniendo mes
    let dia = fecha.getDate(); //obteniendo dia
    let ano = fecha.getFullYear(); //obteniendo año
    if (dia < 10)
        dia = '0' + dia; //agrega cero si el menor de 10
    if (mes < 10)
        mes = '0' + mes //agrega cero si el menor de 10
    let fechaHoy = ano + "-" + mes + "-" + dia;
    // FECHA PARA MAÑANA
    let mañana = (fecha.getDate() + 1)
    if (mañana < 10)
        mañana = '0' + mañana; //agrega cero si el menor de 10
    let fechamañana = ano + "-" + mes + "-" + mañana;
    document.getElementById('fechaIN').min = ano + "-" + mes + "-" + dia;
    document.getElementById('fechaOut').min = ano + "-" + mes + "-" + mañana;
    document.getElementById('fechaIN').value = fechaHoy;
    document.getElementById('fechaOut').value = fechamañana;
    // ALMACENAMIENTOS DATOS PARA CARDS BANNER
    localStorage.setItem("fechaCheckOut", fechamañana);
    localStorage.setItem("fechaCheckIn", fechaHoy)
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LIMPIEZA LOCALSTORAGE
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function clearStorage() {
    localStorage.clear();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// EJECUTAR ACCIONES AL CARGAR LA PAGINA
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function ejecutarAlCargarPagina() {
    verificarFechaIN();
    clearStorage();
    vs()
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCIONES PARA MODALES 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function mostrarModalDestino() {
    document.getElementById('openModal').style.display = 'block';
}

function CerrarModal() {
    document.getElementById('openModal').style.display = 'none';
}

function mostrarModalFechas() {
    document.getElementById('openModal2').style.display = 'initial';
}

function CerrarModal2() {
    document.getElementById('openModal2').style.display = 'none';
}

function mostrarModalHabitaciones() {
    document.getElementById('openModal3').style.display = 'block';
    vs()
}

function CerrarModal3() {
    document.getElementById('openModal3').style.display = 'none';
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LLAMADA DE FUNCION - FUNCIONES MODAL
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
window.onload = ejecutarAlCargarPagina;
CerrarModal()
CerrarModal2()

// ::::::: DECISIONES MODAL HABITACIONES MAYOR A HUESPEDES
let decision = ""
function aceptar() {
    decision = true
    localStorage.setItem("decision", decision)
    CerrarModal3()
    window.location.href = "../html/destino-seleccionado.html", true;
    localStorage.removeItem('HUEvsHAB');
    localStorage.removeItem('decision');
}

function cancelar() {
    decision = false
    localStorage.setItem("decision", decision)
    alert("Entonces cambie las habitaciones");
    CerrarModal3()
    window.location.href = "../index.html"
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//::::::::::::::::::: CARDS BANNER:::::::::::::::::
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function bogota() {
    let ciudad = "BOGOTA"
    localStorage.setItem("ciudadSeleccion", ciudad)
    creacion()
}
function cartagena() {
    let ciudad = "CARTAGENA"
    localStorage.setItem("ciudadSeleccion", ciudad)
    creacion()
}
function medellin() {
    let ciudad = "MEDELLIN"
    localStorage.setItem("ciudadSeleccion", ciudad)
    creacion()
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// : CREACION DE DATOS PARA FORMULARIO DE RESERVA SI SE DIRIGE DESDE LAS CARD BANNER
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function creacion() {
    let n = 1
    let h = 2
    localStorage.setItem("numeroAdultos", h)
    localStorage.setItem("numeroHabitaciones", n)
    verificarFechaIN()
}

function crearBarichara() {
    let ciudad = "Barichara"
    localStorage.setItem("ciudadSeleccion", ciudad)
    let id_hotel_sc = 25
    localStorage.setItem("id_hotel_sc", id_hotel_sc)
    let imgHotelDS = "https://imagenes.weekendcolombia.co/47561293db15b9cb8174a22e5b5-3.jpg"
    localStorage.setItem("imgHotelDS", imgHotelDS)
    let namehotel = "TERRA BARICHARA"
    localStorage.setItem("namehotel", namehotel)
    let precioHab = 210000
    localStorage.setItem("precioHab", precioHab)
    creacion()
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// :::::::::::: BANDERA PARA FILTRO AVANZADO :::::::::::
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function vs() {
    if (document.getElementById("numAdult").value >= document.getElementById("numHab").value) {
        let HueFlag = 1;
        localStorage.setItem("HUEvsHAB", HueFlag)
    } else {
        let HueFlag = 2;
        localStorage.setItem("HUEvsHAB", HueFlag)

    }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//::::::::::::: BARRA DE BUSQUEDA PRINCIPAL ::::::::::
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// LOGICA PRINCIPAL BARRA DE BISQUEDA
function filtracionAvanzada() {
    if (document.getElementById('fechaIN').value > document.getElementById('fechaOut').value) {
        mostrarModalFechas()
    } else if (document.getElementById('numHab').value > document.getElementById('numAdult').value) {
        if (localStorage.getItem("decision") == false || localStorage.getItem("decision") == undefined) {
            mostrarModalHabitaciones()
        } else {
            window.location.href = "../html/destino-seleccionado.html", true;
        }
    } else if (localStorage.getItem("HUEvsHAB") == 1) {
        window.location.href = "../html/destino-seleccionado.html", true;
    }
}

// FUNCIONAMIENTO Y LOGICA DE LA BARRA DE BUQUEDA
function funcionBuscar() {
    // Validando que las fechas del checkOut no sea antes del checkIN
    if (document.getElementById('ciudad').value == "BARRANQUILLA") {
        filtracionAvanzada()
    } else if (document.getElementById('ciudad').value == "BARICHARA") {
        filtracionAvanzada()
    } else if (document.getElementById('ciudad').value == "BOGOTA") {
        filtracionAvanzada()
    } else if (document.getElementById('ciudad').value == "CALI") {
        filtracionAvanzada()
    } else if (document.getElementById('ciudad').value == "CARTAGENA") {
        filtracionAvanzada()
    } else if (document.getElementById('ciudad').value == "SAN ANDRES") {
        filtracionAvanzada()
    } else if (document.getElementById('ciudad').value == "SANTA MARTA") {
        filtracionAvanzada()
    } else if (document.getElementById('ciudad').value == "MEDELLIN") {
        filtracionAvanzada()
    } else if (document.getElementById('ciudad').value == "LETICIA") {
        filtracionAvanzada()
    } else {
        mostrarModalDestino() // Modal seleccionar Destino
    }
    passInformacion() //Ejecutamos la funcion de guardar información para luego utilizarla en los otros html
}



let select = document.getElementById('ciudad');
select.addEventListener('change', function sel(event) {
    console.log(event.target.value)
})

function funcionBuscar() {
    if (document.getElementById('fechaIN').value > document.getElementById('fechaOut').value) {
        alert("La fecha de checkout no puede ser antes que la de check in");
    } else {
        if (document.getElementById('ciudad').value == "BARRANQUILLA") {
            document.location.href = "destinos.html", true;
        } else if (document.getElementById('ciudad').value == "BARICHARA") {
            document.location.href = "destinos.html", true;
        } else if (document.getElementById('ciudad').value == "BOGOTA") {
            document.location.href = "destino-seleccionado.html", true;
        } else if (document.getElementById('ciudad').value == "CALI") {
            document.location.href = "destinos.html", true;
        } else if (document.getElementById('ciudad').value == "CARTAGENA") {
            document.location.href = "destinos.html", true;
        } else if (document.getElementById('ciudad').value == "SAN ANDRES") {
            document.location.href = "destinos.html", true;
        } else if (document.getElementById('ciudad').value == "SANTA MARTA") {
            document.location.href = "destinos.html", true;
        } else if (document.getElementById('ciudad').value == "LETICIA") {
            document.location.href = "destinos.html", true;
        } else {
            showModal()
        }
        passInformacion()
    }
};

function passInformacion() {
    let fechaIN = document.getElementById('fechaIN').value;
    localStorage.setItem("fechaCheckIn", fechaIN);
    let fechaOUT = document.getElementById('fechaOut').value;
    localStorage.setItem("fechaCheckOut", fechaOUT);
    let destinoSelec = document.getElementById('ciudad').value;
    localStorage.setItem("ciudadSeleccion", destinoSelec);
    return true;
}

//function verificarFecha(){

function clearStorage() {
    localStorage.clear();
}

function showModal() {
    document.getElementById('openModal').style.display = 'block';
  }

function CloseModal() {
    document.getElementById('openModal').style.display = 'none';
  }

CloseModal()

function get_data_form(evt) {
    // Indicar que no recarge página al enviar el formulario
    evt.preventDefault()
    const form = evt.target
    let tipoDocu = form.tipoDocumento.value
    localStorage.setItem("tipoDocumento", tipoDocu)

    let numDocu = form.numeroDocumento.value
    localStorage.setItem("numeroDocumento", numDocu)

    let numtoken = form.token.value
    localStorage.setItem("token", numtoken)

    let flag2 = true
    localStorage.setItem("flag2", flag2)
    const reserva = {
        tipoDocumento: form.numeroDocumento.value,
        numeroDocumento: form.numeroDocumento.value,
        token: form.token.value
    }
    limpiar_formulario()
    return reserva
}


// Funcion para limpiar el localStorage
function clearStorage() {
    localStorage.clear();
}

function verificacion() {
    if (document.getElementById("numeroDocumento").value != "" && document.getElementById("token").value != "") {
        window.location.href = '../html/mireserva_resultado.html'
    }
}

window.onload = clearStorage;

function limpiar_formulario() {
    document.getElementById("numeroDocumento").value = ""
    document.getElementById("token").value = ""
    clearStorage
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCIONES PARA MODALES 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function recupercionToken() {
    document.getElementById('openModal7').style.display = 'block';
}

function CerrarModal7() {
    document.getElementById('openModal7').style.display = 'none';
    location.reload()
    clearStorage
}


function obtenerInfo(evt) {
    // Indicar que no recarge página al enviar el formulario
    evt.preventDefault()
    const form = evt.target
    let tipoDocu = form.tipoDocumento2.value
    localStorage.setItem("tipoDocumento_recuperar2", tipoDocu)

    let numDocu = form.numeroDocumento2.value
    localStorage.setItem("numeroDocumento_recuperar", numDocu)

    let email = form.correoPersona.value
    localStorage.setItem("correoPersona_recuperar", email)
    const info = {
        tipoDocumento: form.numeroDocumento2.value,
        numeroDocumento: form.numeroDocumento2.value,
        correoPersona: form.correoPersona.value
    }
    limpiar_formulario2()
    mainR()
    return info

}

function limpiar_formulario2() {
    document.getElementById("tipoDocumento2").value = "CC"
    document.getElementById("numeroDocumento2").value = ""
    document.getElementById("correoPersona").value = ""
}
// :::::  OBTENIENDO TOKEN ::::::



// OBTENIENDO JSON
async function get_info_reserva(url) {
    const respuesta = await fetch(url)
    const inforeserva = await respuesta.json()
    return inforeserva
}
// EXTRAYENDO INFORMACION DEL JSON
async function mainR() {
    let URL_R = "http://localhost:8080/reservas/token/"
    URL_R += localStorage.getItem("numeroDocumento_recuperar") +"/" + localStorage.getItem("tipoDocumento_recuperar2") +"/"+ localStorage.getItem("correoPersona_recuperar")
    console.log(URL_R)
    const url = URL_R
    const info = await get_info_reserva(url) // LLAMANDO FUNCION PARA OBTENER JSON
    //console.table(info)

    // :::::  INFORMACION RESERVA ::::::
    // <-- ID RESERVA -->
    let token = info[0]
    console.log(info)
    localStorage.setItem("token", token)


    recuperarToken() // LLAMADO DE FUNCION PARA MOSTRAR INFO DE LA RESERVA DE ACUERDO AL RESULTADO, SI NO SE MUESTRA MODAL SIN RESERVA
}
document.getElementById('btn_modal_cancelar').style.display = 'none';
function recuperarToken() {
    function confirmacion(){
        let txt = ""
        if(localStorage.getItem("token") == "undefined"){
            txt = " NO TIENES <br> NINGUNA RESERVA"
            let flag = "false"
            localStorage.setItem("flag",flag)
        }else{
            txt = localStorage.getItem("token")
            let flag = "true"
            localStorage.setItem("flag",flag)
        }
        return txt
    }
    confirmacion()
    
    let titulo = ""
    if(localStorage.getItem("flag") =="true"){
        titulo = "TU CODIGO DE RESERVA ES"
    }
    const modal_elimnacion = document.getElementById("token_encontrado")
    let div = "<div>"
    div +=
        `<p>${titulo}</p>
         <p style ="font-size: 30px;font-weight: 600; margin-top:20px;">${confirmacion()}</p>
    `
    div += "</div>"
    modal_elimnacion.innerHTML += div
    document.getElementById('btn_modal_aceptar').style.display = 'none';
    document.getElementById('form_recuperar_token').style.display = 'none';
    document.getElementById('btn_modal_cancelar2').style.display = 'none';

    document.getElementById('btn_modal_cancelar').style.display = 'block';

}
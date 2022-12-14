//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// CONDICIONAL SI NO EXISTEN DATOS - DEVOLVER Y NO MOSTRAR INFORMACIÓN
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function devolver() { // SI NO EXISTEN DATOS MOSTRAR DEVOLVER AL INDEX
    if (localStorage.getItem("numDocum") == null) {
        window.location.href = "../index.html"
    } else {// SI EXISTEN DATOS MOSTRAR LOS DATOS ACORDE AL CONSUMO DE API
        
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // OBTENIENDO TOKEN DE ACUERDO AL NUMERO DE DOCUMENTO
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        let URLT = "http://localhost:8080/reservas/token/"
        URLT += localStorage.getItem("numDocum")
        async function obtenertoken(url) {
            const respuesta = await fetch(url)
            const reservatoken = await respuesta.json()
            return reservatoken
        }
        async function main() {
            const url = URLT
            const token = await obtenertoken(url)
            token_reserva(token)
        }
        main()

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // BANDERA PARA MANIPULACIÓN TEXTO DOM
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function txtConfirmacion_actu(){
            if(localStorage.getItem("flag2") == "true"){
                txt = "ACTUALIZADA"
            }else{
                txt = "CONFIRMADA"
            }
            return txt
        }
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // VISUALIZACIÓN DOM -> INFORMACIÓN RESERVA
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function token_reserva(token) {
            const complemento_reserva = document.getElementById("confirmacion_reserva")
            let t = token
            let div = "<div>"
            div += `
                <div  class ="txt_confirmacion_reserva">
                    
                    <p class = "nombre_adulto_reserva">${(localStorage.getItem("nombreAdul")).toUpperCase()} ${localStorage.getItem("apellidoAdul").toUpperCase()}</p>
                    <p class ="tu_reserva_confirmada">TU RESERVA HA SIDO<br> ${txtConfirmacion_actu()}</p>

                    <p class ="guarda_token"> &#187; <span style = "color: #E48D36;">GUARDA</span> &laquo;<br> TU CODIGO DE RESERVA</p>
                    <p id="token_re" class = "token_reserva">${t[0]}

                    <p class = "modifica_reserva">Modifica o cancela tu reserva en nuestra<br> pestaña <span style = "color: #023F76;"> MiReserva*.</span></p>
                    <p class = "recuerda_reserva"> *Recuerda que necesitas tu número de reserva <br>y el número de documento para realizar modificaciones.</p>
                    <div class ="btn_confirmacion_reserva"> 
                        <button class = "btn_nuevo_destino" onclick = "window.location.href='../html/destinos.html'">RESERVAR UN NUEVO DESTINO</button> 
                        <button class = "btn_mi_reserva" onclick = "window.location.href='../html/mireserva.html'">MIRESERVA</button>
                    </div>
                </div>    
        `
            div += "</div>"
            complemento_reserva.innerHTML += div
        }
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // VIUSALIZACIÓN DOM -> INFORMACIÓN HOTEL SELECCIONADO DE ACUERDO A RESERVA
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function set_value_hote() {
            const card_hotel = document.getElementById("hotelSeleccionadoApi")
            let div = "<div class = 'box-img'>"
            div += `
                    <div class ="imgHotelSelec">
                        <img src = "${localStorage.getItem("imgHotelDS")}">
                    </div>
                    <div class = "txt_hotel_seleccionado">
                        <p style = "color: #E48D36; font-size: 16px; margin-top:10px, font-weight: 800;">¡HURRA!</p>
                        <p>HAS RESERVADO</p>
                        <p style = "font-size: 25px; font-weight: 700;">${localStorage.getItem("namehotel")}</p>
                    
                        <div>
                            <p style = "font-size: 12px; margin-top:20px; color: #E48D36;">CHECK -IN </p>
                            <p style = "font-size: 15px; font-weight: 700;">${localStorage.getItem("fechaCheckIn")}</p>
                            <p style = "font-size: 12px; color: #E48D36;">CHECK-OUT</p>
                            <p style = "font-size: 15px; font-weight: 700;">${localStorage.getItem("fechaCheckOut")}</p>
                        </div>
                        <div style ="margin-top:20px;">
                            <img src="../Image/icoHuesped.svg" class = "img_huesped_hs">
                            <p> <span style ="font-size:15px; font-weight: 400;margin:0 0 0 30px;"> Huespedes:</span> 
                            <span style = "font-weight: 700;">${localStorage.getItem("numeroAdultos")}</span></p>

                            <img  src="../Image/icoHab.svg" class = "img_huesped_hs" style = "scale:70%; margin:2px 0 0 -168px;">
                            <p style = "margin-top:12px;"> <span style ="font-size:15px; font-weight: 400; margin-left:30px;">Habitaciones:</span>  
                            <span style = "font-size:16px; font-weight: 700;">${localStorage.getItem("numeroHabitaciones")}</span></p>
                        </div>
                        
                        <p style = "margin:20px auto;"><span style = "font-size:18px; font-weight: 700;">$${(localStorage.getItem("precioHab") * 1).toLocaleString('de-DE')}</span> por noche</p>

                        <p style = "text-align: right; padding-right:20px;">
                        <span style = "color: #E48D36;font-size:13px">TOTAL POR </span> ${numeroNoches().toLocaleString('de-DE')} 
                         <span style = "color: #E48D36; font-size:13px">${txtnoche()} Y </span> ${localStorage.getItem("numeroHabitaciones")}<span style = "color: #E48D36;font-size:13px"> ${txthabi()}</span> </p>

                        <p style = "margin:5px 0 0 0; text-align: right; padding-right:20px;">$
                        <span style ="font-size:25px; font-weight: 700;"> ${((localStorage.getItem("precioHab")*1) * numeroNoches() * localStorage.getItem("numeroHabitaciones")).toLocaleString('de-DE')}</span><p>
                    </div>
                    `
            div += "</div>"
            card_hotel.innerHTML += div

        }

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // CALCULO NÚMERO DE NOCHES DE ACUERDO A LAS FECHAS SELECCIONADAS
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function numeroNoches() {
            let fechainicio = new Date(localStorage.getItem("fechaCheckIn"))
            let fechaFin = new Date(localStorage.getItem("fechaCheckOut"))
            let diaMilisegundos = 86400000
            let diferenciaMil = fechaFin - fechainicio
            let diferenciaDia = diferenciaMil / diaMilisegundos
            if (diferenciaDia < 1) {
                diferenciaDia = 1
            }
            return diferenciaDia
        }
        
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EDICIÓN TEXTO PLURAL SINGULAR -> DOM
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function txtnoche(){
            let txt = "NOCHES"
            if(numeroNoches() == 1){
                txt = "NOCHE"
            }
            return txt
        }
        txtnoche()
        function txthabi(){
            let txt = "HABITACIONES"
            if(localStorage.getItem("numeroHabitaciones") == 1){
                txt = "HABITACIÓN"
            }
            return txt
        }
        txthabi()

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // LLAMADO DE FUNCIONES
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        set_value_hote()
        
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // BANDERA PARA NO DEOLVERSE NI EXISTA FUGA DE DATOS
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        let flag = true
        localStorage.setItem("flag", flag)
        window.location.hash = "no-back-button";
        window.location.hash = "Again-No-back-button";//esta linea es necesaria para chrome
        window.onhashchange = function () { window.location.hash = "no-back-button"; }
    }
}

devolver()

let select = document.getElementById('ciudad');
select.addEventListener('change', function sel(event){
    console.log(event.target.value)
})



function funcionBuscar(){
    if (document.getElementById('ciudad').value == "BARRANQUILLA"){
        document.location.href = "destinos.html",true;
    }else{
        console.log("error")
    }
};
function eliminar(){
    var cookie = document.querySelector(".cookies");
    cookie.remove();
}

function loadingw(ciudad){
    alert("Loading weather report of "+ciudad+"...");
    var elementoh2 = document.querySelector("#city");
    elementoh2.innerText = ciudad;
}


function cambioT(element){
    var forc = element.value;
    for (var i =1; i <=8; i++){
        var elementotemperatura = document.querySelector("#temperatura"+i);
        var temperatura = elementotemperatura.innerText;
        temperatura = parseInt(temperatura);
        var newTemp = 0;
        if (temperatura == "°C"){
            (temperatura - 32) * 5/9;
        }
        else{
            newTemp = (temperatura * 9/5) + 32;
        }
        elementotemperatura.innerText = newTemp;
    }

    
}
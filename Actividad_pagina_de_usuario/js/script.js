function edit(){
    var elementoh1 = document.querySelector(".card-body h1");
    elementoh1.innerText = "Any other Name";
}

function remove_1(){
    var elementoaeliminar = document.querySelector(".todd");
    elementoaeliminar.remove();
    var numeroe = document.querySelector(".numero-2");
    var numero = numeroe.innerText;
    numero = parseInt(numero);
    numero = numero - 1;
    numeroe.innerText = numero;
}

function remove_2(){
    var elementoaeliminar = document.querySelector(".phill");
    elementoaeliminar.remove();
    var numeroe = document.querySelector(".numero-2");
    var numero = numeroe.innerText;
    numero = parseInt(numero);
    numero = numero - 1;
    numeroe.innerText = numero;
}

function aumentar_1(){
    var numeroe = document.querySelector(".numero-500");
    var numero = numeroe.innerText;
    numero = parseInt(numero);
    numero = numero + 1;
    numeroe.innerText = numero;
}


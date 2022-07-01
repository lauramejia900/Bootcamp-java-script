function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

var s1 = pizzaOven("estilo chicago", "tradicional", ["mozarella"], ["pepperoni", "salchicha"]);
console.log(s1);

var s2 = pizzaOven("lanzada a mano", "marinara", ["mozarella","feta"], ["champiñones", "aceituna", "Cebollas"]);
console.log(s2);

var s3 = pizzaOven("radicional", "tradicional", ["mozarella","queso azul"], ["jamon", "piña"]);
console.log(s3);

var s4 = pizzaOven("lanzada a mano", "tradicional", ["feta"], ["champiñones", "Cebollas"]);
console.log(s4);
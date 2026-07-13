function sumar(a, b) {
    const resultado = a + b;

    console.log("Dentro:", resultado);

    return resultado;
}

const total = sumar(10, 20);

console.log("Fuera:", total);

//¿Qué pasa si intentamos acceder a resultado?
//console.log(resultado);
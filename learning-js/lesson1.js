function saludar() {
    console.log("Hola");
}

saludar.id = 10;
saludar.nombre = "Mi función";

console.log(Object.keys(saludar));

console.log(saludar.hasOwnProperty("id"));
console.log(saludar.hasOwnProperty("nombre"));
console.log(saludar.hasOwnProperty("length"));
console.log(saludar.hasOwnProperty("name"));
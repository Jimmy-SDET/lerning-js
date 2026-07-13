function saludar() {
    console.log("Hola");
}

saludar.id = 10;
saludar.nombre = "Mi función";

console.log("Keys:", Object.keys(saludar));

console.log("id:", saludar.hasOwnProperty("id"));
console.log("nombre:", saludar.hasOwnProperty("nombre"));
console.log("length:", saludar.hasOwnProperty("length"));
console.log("name:", saludar.hasOwnProperty("name"));
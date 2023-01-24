// Hoistin: Declara y asigna undefined
var nombre = undefined

console.log(nombre) // undefined
nombre = "Andres"

// Hoisting en funciones
console.log( saludar() )

function saludar() {
  return "Hola"
}
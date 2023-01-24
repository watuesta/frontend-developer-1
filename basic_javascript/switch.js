var numero = 1;

switch(numero){
    case 1:
        console.log("Soy 1");
        break;
    case 2:
        console.log("Soy 2");
        break;
    default:
        console.log("No soy nada");
}

//Juego de piedra papel o tijera
var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}


// Ejercicio tienda de tecnología
export function solution(article) {
    var opc = article;
    var msj = '';
  
    switch (true) {
      case (opc === "computadora"):
        return msj = "Con mi computadora puedo programar usando JavaScript";
        break;
      case (opc === "celular"):
        return msj ="En mi celular puedo aprender usando la app de Platzi";
        break;
      case (opc === "cable"):
        return msj = "¡Hay un cable en mi bota!";
        break;
      default:
        return msj = "Artículo no encontrado"
  
    }
  
  }
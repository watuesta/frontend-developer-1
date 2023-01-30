//Ciclo For

// Variable
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

// Función
function saludarEstudiantes(estudiante){
    console.log("hola, " + estudiante + ".");
}

// Ciclo For primer opción
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// Ciclo For segunda opción
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
//////////////////////////////////////////
// Ciclo while
//////////////////////////////////////////

// Variable
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

// Función
function saludarEstudiantes(estudiante){
    console.log("Hola, " + estudiante + ".");
}

//Ciclo
while(estudiantes.length > 0){
    // Ver como se va vaciando de elementos el array
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

/* Ejercicio en clase

En este desafío tu función solution recibirá 2 parámetros:

estudiantes: un array de strings con varios nombres de estudiantes.
deathCount: un número entero.
nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
Tu función debe retornar un array de elementos con las siguientes indicaciones:

Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.*/

export function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) {
      estudiantes.pop();
      deathCount--;
    }
  
    estudiantes.push(nuevo);
    return estudiantes;
  }

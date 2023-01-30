// Variable
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

// Función
function saludarEstudiantes(estudiante){
    console.log("hola, " + estudiante + ".");
}

// Ciclo For
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

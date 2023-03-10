let personas = [];

for(let i = 1; i <= 3; i++){
    let nombre = prompt("Ingrese su nombre" +i);
    let edad = prompt("ingrese su edad "+i);
    personas.push({nombre: nombre, edad: edad});

}

let edadMaxima = 0; 
let indiceMaximo = 0; 

for (let i=0; i < personas.length; i++){
    if(personas[i].edad > edadMaxima){
        edadMaxima = personas[i].edad;
        indiceMaximo= i;

    }
}

console.log("La persona con la mayor edad es" + personas[indiceMaximo].nombre)
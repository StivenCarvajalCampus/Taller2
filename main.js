let numero1 = parseInt( prompt("ingrese un numero"));
let numero2 = parseInt (prompt("ingrese numero 2"));

if (numero1>numero2){
    let suma= numero1 + numero2;
    let diferencia = numero1-numero2;
    console.log("el resultado es " + suma);
    console.log("la diferencia es " + diferencia);
}else{
    let producto = numero1 * numero2;
    let division = numero1 / numero2;
    console.log("el producto es " + producto);
    console.log("la division es " + division);

}
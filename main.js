 let nota1 = parseFloat( prompt("Ingrese su nota1:"));
 let nota2 = parseFloat( prompt("Ingrese su nota2:"));
 let nota3 = parseFloat ( prompt("Ingrese su nota3:"));
 //promediar
let resultado = (nota1+nota2+nota3) / 3 ;
//se hace el filtro de la condicion 
if (resultado <= 3.9){
    console.log("Estudie")
}else{
    console.log("becado")
}

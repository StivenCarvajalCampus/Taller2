import {calcularvoltaje} from './voltage.js';

const resistencia = prompt ("introduce el valor de resistencia ")
const intensidad = prompt("introduce el valor de intensidad")

const voltaje = calcularvoltaje(resistencia,intensidad);
console.log("El valor del voltaje es ", voltaje);
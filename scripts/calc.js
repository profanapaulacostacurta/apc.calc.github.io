import { soma } from './modulos/soma.js';

export function testar(){
 var resultado = "A soma de 3 + 5 é "+ soma(3,5);
 console.log("A soma de 3 + 5 é ", resultado);
 document.getElementById("calculo").innerHTML= soma;
 console.log("sair");
 return;
}

import { soma, somaArray } from 'modulos/soma.js';

function testar(){
 var soma = "A soma de 3 + 5 é "+ soma(3,5);
 console.log("A soma de 3 + 5 é ", soma(3,5));
 document.getElementById("calculo").innerHTML= soma;
 console.log("sair");
 return;
}

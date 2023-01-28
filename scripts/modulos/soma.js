var somatorio = 0;
function soma (primeiroNumero, segundoNumero){
    return primeiroNumero + segundoNumero;
}
function somaArray(array){
      var soma = 0;
      for (let a of array){
            soma = soma + a;
      }
      return soma;
}
export { somatorio, soma, somaArray }; // Exportação de todos os itens

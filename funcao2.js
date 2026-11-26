function jogarAdivinhacao(numeroDigitado, numeroSecreto) {
  let acertou = false;

  while (acertou === false) {


    if (numeroDigitado < 1 || numeroDigitado > 10 || isNaN(numeroDigitado)) {
      alert("Número inválido! Digite de 1 a 10.");
    } else if (numeroDigitado > numeroSecreto) {
      alert("Número digitado maior que o secreto.");
    } else if (numeroDigitado < numeroSecreto) {
      alert("Número digitado menor que o secreto.");
    } else {
      alert("Parabéns! Você acertou!");
      acertou = true;
      break;
    }

    numeroDigitado = prompt("Digite um número:");
  }
}

function boaSorte(nome){
    alert("Boa sorte " + nome + "!")
}

//function checarNumero(numeroDigitado, numeroSecreto) {

//if (numeroDigitado < 1 || numeroDigitado > 10 || isNaN(numeroDigitado)) {
//alert("Número inválido! Digite de 1 a 10.");
//return false;
//   } else if (numeroDigitado > numeroSecreto) {
//    alert("Número digitado maior que o secreto.");
//return false;
//  } else if (numeroDigitado < numeroSecreto) {
//     alert("Número digitado menor que o secreto.");
//return false;
//  } else {
//     alert("Parabéns! Você acertou!");
//    return true;
//    break;
//   }

//   numeroDigitado = prompt("Digite um número:");
// }



//}
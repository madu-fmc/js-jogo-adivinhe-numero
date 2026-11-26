// Pode usar Number()  parseInt()  ---- melhor o number
//alert("Boas vindas!");

//let nomeJogador = prompt("Digite seu nome: ");
//let querJogar = confirm("Deseja jogar?");

//console.log(typeof querJogar); //pra ver o tipo (string, boolean...)
//console.log(querJogar);

//alert("Boa sorte, " + nomeJogador)

//let numero = prompt ("Digite seu numero:");
//num10 = (Number(numero) + 10);
//alert(numero + " + 10 ="   + num10 );


//let querJogar = confirm("Deseja jogar?");

//if (querJogar) {
//    alert("Boa Sorte, " + nomeJogador);
//
//    const numeroSecreto = 7;
//  
//    let numeroDigitado = prompt("Digite um número: ");
//    numeroDigitado = Number(numeroDigitado);
  
////    while(numeroDigitado != numeroSecreto){
    


 //   if( numeroDigitado <1 || numeroDigitado >10 || isNaN(numeroDigitado)){
 //       alert("Número inválido! Digite de 1 e 10.")
 //   }
        

  //     else if(numeroDigitado > numeroSecreto){
  //      alert("Número digitado maior que o secreto.");
   // }  else if(numeroDigitado < numeroSecreto){
   //     alert("Número digitado menor que o secreto.");
  // } 

 //numeroDigitado = prompt("Digite um número: ");
  //  }
 //   alert("acertou!")

//} else {
 //   alert("Que pena! Até a próxima");
//}


// -----------------correção
//let acertou = false;
//while (acertou === false)    ouu while(!acertou)
//let numeroDigitado = prompt("Digite um número: ");
//numeroDigitado = Number(numeroDigitado);
// if( numeroDigitado <1 || numeroDigitado >10 || isNaN(numeroDigitado)){
//        alert("Número inválido! Digite de 1 e 10.")
//   }
//       
//
//      else if(numeroDigitado > numeroSecreto){
//alert("Número digitado maior que o secreto.");
//  }  else if(numeroDigitado < numeroSecreto){
// alert("Número digitado menor que o secreto.");
//  } 
// numeroDigitado = prompt("Digite um número: ");
////////////////////////////////////// --------25/11--------
let numeroSecreto = 7; 
let numeroDigitado = prompt("Digite um número");
numeroDigitado = Number(numeroDigitado);

jogarAdivinhacao(numeroDigitado, numeroSecreto);

//let acertou =false;
//if (querjogar)
// while (acertou===false){
//let numeroDigitado= prompt("digite um nmr");
//numeroDigitado = Number(numeroDigitado);
//acertou= checarNumero(numeroDigitado, numeroSecreto);
//}
//else{alert("que pena, ate a prox")}


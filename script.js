// Pode usar Number()  parseInt()  ---- melhor o number
alert("Boas vindas!");

let nomeJogador = prompt("Digite seu nome: ");
//let querJogar = confirm("Deseja jogar?");

//console.log(typeof querJogar); //pra ver o tipo (string, boolean...)
//console.log(querJogar);

//alert("Boa sorte, " + nomeJogador)

//let numero = prompt ("Digite seu numero:");
//num10 = (Number(numero) + 10);
//alert(numero + " + 10 ="   + num10 );


let querJogar = confirm("Deseja jogar?");

if (querJogar) {
    alert("Boa Sorte, " + nomeJogador);

    const numeroSecreto = 7;

    let numeroDigitado = prompt("Digite um número: ");

    
        
    if(numeroDigitado == numeroSecreto){
        alert("Acertou!");
    }  else if(numeroDigitado > numeroSecreto){
        alert("Maior.");
    }  else if(numeroDigitado < numeroSecreto){
        alert("Menor.");
    } 

} else {
    alert("Que pena! Até a próxima");
}
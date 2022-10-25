

/* 1. Faça um algoritmo para ler 20 números e armazenar em um array. Após a leitura total dos 20 números, o algoritmo deve escrever esse array. */

/*

var testezinho =  [] // Criado a array onde será armazenado os valores 

var acum = 0;

while(acum < 20){
    var insira = parseInt(prompt('Insira um numero'));
    
    testezinho[acum]=insira 
    // a array testezinho está armazenando e acumulando todos os números até atingir a quantidade de 20 números 
    // o "acum" é a acumuladora que faz essa contagem e limita ela. 
    // o insira é a variável onde é inserido o número que ficará guardado na array testezinho 

    acum++
}


var acumalert = 0


while(acumalert < 20){
    alert(testezinho[acumalert]); // esse while tem como função impedir a repetição de criar vários alerts, tornando o trabalho mais fácil 
    acumalert++;                  // ele solta um alert com a array testezinho e logo em seguida acumula o valor de alerts, limitando para 20 
}

*/

/* 2. Faça um algoritmo para ler 12 números informados pelo usuário e armazenar em dois arrays: um com os números acima de 50. Outro com números abaixo de 50. */

/*

var porfavordacertobaixo = []; // Criando a array onde será armazenado os valores abaixo de 50
var porfavordacertoalto = []; // Criando a array onde será armazenado os valores acima de 50

var acumtwelve = 0; // quantidade de números que serão inseridos
var acumbaixo = 0; // quantidade de números que são menores que 50
var acumalto = 0; // quantidade de números que são maiores que 50


while(acumtwelve < 12){ // repetição até 12
    var insiraaqui = parseInt(prompt('Insira o valor aqui :)'));

    if(insiraaqui < 50){
        porfavordacertobaixo[acumbaixo]=insiraaqui // array que armazena abaixo de 50 [acumuladora que conta quantos números estão abaixo de 50] = de onde são retirado os valores
        acumbaixo++; // contadora de quantos números estão abaixo de 50
    }
    else{
        porfavordacertoalto[acumalto]=insiraaqui // array que armazena os número acima de 50 [acumuladora que conta quantos números estãoa cima de 50] = de onde são retirado os valores
        acumalto++; // acumuladora que conta quantos estão acima de  50
    }
    acumtwelve++;
}

var avisobaixo = 0; //contadora de avisos

alert('Esses são os números abaixo de 50...')
while(avisobaixo < acumbaixo){ // condição de repetição = Se acumuladora de avisos for menor que a acumuladora de quantos números estão registrados deve aparecer o alert com os numeros da array
    alert(porfavordacertobaixo[avisobaixo]);
    avisobaixo++;
}

var avisoalto = 0;

alert('Esses são os números acima de 50...')

while(avisoalto < acumalto){ // condição de repetição = Se acumuladora de avisos for menor que a acumuladora de quantos números estão registrados deve aparecer o alert com os numeros da array
    alert(porfavordacertoalto[avisoalto]);
    avisoalto++;
}

*/

// 3. Drofo e Topper estão em uma aventura mágica. Faça um programa que contenha um inventário para cada um dos dois aventureiros - esse inventário será um array.
// Drofo terá um anel da invisibilidade, dois pares de botas mágicas, uma poção do sono e duas poções da inocência em seu inventário e nessa ordem. 
// Torper terá uma capa da invisibilidade, uma pedra do despertar,  uma varinha das varinhas, uma poção da inocência e duas poções da mentira, poção anti-inteligência e nessa ordem. 

/*

var invdrofo = ['Anel da invisibilidade,' + '\n' + 'Botas mágicas,' + '\n' + 'Botas mágicas,' + '\n' + 'Poção do sono,' + '\n' + 'Poção da inocência,' + '\n' + 'Poção da inocência'];
var invtopper = ['Capa invisibilidade,' + '\n' + 'Pedra do despertar,' + '\n' + 'Varinha das varihas,' + '\n' + 'Poção da inocência,' + '\n' + 'Poção da mentira,' + '\n' + 'Poção da mentira,' + '\n' + 'Poção da anti-inteligência'];

alert(' Pós primeira aventura');

alert('Inventário de Drofo:'  + '\n\n' + invdrofo);
alert('Inventário de Topper:'  + '\n\n' + invtopper);

//No meio de sua jornada, Topper consumiu uma das poções da mentira, perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica. 
//Descreva cada uma das ações acima. utilizando código (utilize comentários para ficar mais claro). 


delete invtopper[4]; //- uma poção da mentira
delete invtopper[1]; //- Pedra do despertar
delete invdrofo[1];  //- Botas mágicas
invtopper.push('\n' + 'Botas mágicas'); //+ botas mágicas --> topper
invtopper.push('\n' + 'Espada mágica'); //+ escudo mágico
invtopper.push('\n' + 'Escudo mágico'); //+ espada mágica

alert(' Pós segunda aventura');

alert('Inventário de Drofo:'  + '\n\n' + invdrofo);
alert('Inventário de Topper:'  + '\n\n' + invtopper);

//No meio da sua jornada, Drofo, ganhou mais uma bota mágica, usou sua poção do sono e consumiu a poção anti-inteligência do Torper, encontrou um ovo de dragão e uma coxinha.
//Descreva cada uma das ações acima. utilizando código.

invdrofo.push('\n' + 'Bota mágica');           //+ bota mágica
delete invdrofo[3];                            //- poção de sono
delete invtopper[6];                           //- poção anti-inteligência
invdrofo.push('\n' + 'Ovo de dragão');         //+ Ovo de dragão
invdrofo.push('\n' + 'Coxinha');               //+ Coxinha

alert(' Pós terceira aventura');

alert('Inventário de Drofo:'  + '\n\n' + invdrofo);
alert('Inventário de Topper:'  + '\n\n' + invtopper);

*/
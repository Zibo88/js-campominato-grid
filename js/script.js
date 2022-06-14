// Consegna
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

// Raccolta dati

// Chiedo all'utente che livello di difficioltà vuole scegliere
// let dificultLevel = parseInt (prompt ('Scegli un livello di difficoltà 1-2-3'));
let dificultLevel = parseInt(prompt('dimmi il livell odi difficltà tra 1-2-3'));
// console.log(dificultLevel)

let userNumber = parseInt (prompt('inserisci un numero'))

// attribuisco una condizione con una variabile range 
// se sceglie 1: range 1-100, 2: range 1-81, 3 range 1-49;

let rangeMax;
if(dificultLevel === 1){
    rangeMax = 100;
} else if(dificultLevel === 2){
    rangeMax = 81;
} else if(dificultLevel === 3){
    rangeMax = 49;
}

console.log('Questo è il numero massimo di numeri', rangeMax)

// Genero le bombe
// genero 16 numeri in base al numero massimo del livello di riferimento (gameMaxNumber)
    // individuo il numero massimo di tentativi che sarà gameMaxNumber - 16

    // evoco la funzione e salvo in una variabile
let theBombs = generateBombs( 16, 1, rangeMax);
// console.log(theBombs)

// creo una funzione che generai numeri random per le bombe
function generateBombs (numberOfBombs, numMin, numMax){
    // creo un array vuoto
    let numberGenerateArray = [];
    
    

    // creo un ciclo for che vada avanti per il numero di bombe richiesto
    for(let i = 0; i < numberOfBombs; i++){
        // evoco la funzione random e la salvo in una variabile
        let randomNumber = getRndInteger(numMin, numMax);
        console.log(randomNumber)
        // pusho solo i numeri che non sono gia presenti nell'array
       if(!numberGenerateArray.includes(randomNumber)){
            numberGenerateArray.push(randomNumber);
       }  

    }
       
    console.log(numberGenerateArray)


    return numberGenerateArray

    
}



// creo una funzione che generi numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// Parte logica

//il gioco andrà avanti finchè:
    // il giocatore non sceglie un numero bomba
    // completa tutti i tentativi senza sbagliare

//------------
// FUNCTION
//------------






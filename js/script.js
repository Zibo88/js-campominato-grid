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
console.log("numeri dati dall'utente", userNumber)

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
// genero 16 numeri in base al numero di bombe da generare, valore minimo e valore massimo del livello di riferimento (rangeMax)
    // evoco la funzione e salvo in una variabile
let theBombs = generateBombs( 16, 1, rangeMax);
console.log("numero di bombe in base all'array the bombs", theBombs)

// tentativi possibili
// let userAttempts = rangeMax - 16;
let userAttempts = 2;
console.log(userAttempts);


// definisco quando termina il gioco e se vince o se perde creando un ciclo while
//creo un array che faccia da contenitore dei numeri dati dall'utente
let gamePlay = true;

let arrayUserNumber = [];

while(gamePlay === true){
    // richiedo il numero all'utente finchè..
    let userNumber = parseInt (prompt('inserisci un numero'));

    
    // se il numero generato include il numero dell'utente
    if(theBombs.includes(userNumber)){
        // il gioco termina
        gamePlay = false
        alert('Hai perso')

        // altrimenti
    } else {
        // se l'array vuoto non continiene usernumber 
        if(!arrayUserNumber.includes(userNumber)){
            // lo pushamo
            arrayUserNumber.push(userNumber);
        }

        // definiamo la vittoria
        if (arrayUserNumber.length === userAttempts){
            alert('hai vinto')
        }
    }
}

// controllo dell'array inizialmente vuoto
// console.log(arrayUserNumber)


//---------
// FUNCTION
//---------
// creo una funzione che generai numeri random per le bombe
function generateBombs (numberOfBombs, numMin, numMax){
    // creo un array vuoto dove inserire i numeri che verrnno generati
    let numberGenerateArray = [];
    
    // creo un ciclo while che vada avanti per tutta la lunghezza dell'array che deve essere inferiore al numero di bombe
    while(numberGenerateArray.length < numberOfBombs){
        // evoco la funzione random e la salvo in una variabile
        let randomNumber = getRndInteger(numMin, numMax);
        // console.log(randomNumber)
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








/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// questo ciclo non verrà eseguito perche fin da subito i>5 è falsa
// per farlo funzionare i<5




// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// anziche = va messo % ---> (num % 2 === 0)
// serve per verificare la parità di un numero

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5 i++) {
        console.log(i);
    }
}

// nel for tra le parentesi ci va ; e non ,
// stampa valori da 0 a 4

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++); {
//         if (numbers % 2 === 0) {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]


// dopo
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function displayEvenNumbers() {
    let evenNumbers = [];
    // non va ; dopo i++
    for (let i = 0; i < numbers.length; i++) {
        if (numbers % 2 === 0) {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); 
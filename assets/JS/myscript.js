/*  Consegna Esercizio Email:

    -   In HTML:
        -   creo dei campi di testo (<input email>) per chiedere all'utente l'email
        (N.B. evita di usare il tag <form> perché altrimenti add.EventListsner che userai in seguito NON va bene)

        -    creo un bottone (<botton></botton>) per poter inviare tale email 

    -  In JS: 
        -    Crea un array con dentro un certo numero  di email pre-costitutite/dette credenziali che sono le uniche chiavi valide con le quali si può accedere (crea variabile let + array)

        -   Agganciare i pulsanti affinché l'input possa essere trasmesso (crea variabile let + document-getElement...)

        -   Mettere in ascolto il pulsante (<button></button>) affinché possa reagire ad un determinato evento (cioè inviare l'email digitata dall'utente), in questo caso l'evento è il "click del mouse" (add.EventListsner("click", e far partire la funzione anonima function())

        -   All'interno della funzione creiamo il ciclo  che permetta di confrontare l'email digitata dall'utente con i molteplici valori pre-costituti contenuti nella lista array e in base a ciò che digita l'utente si verificheranno le diverse condizioni:

            If/Else:
            Se l'email corrisponde allora compare la scritta "Credenziali corrette"

            Altrimenti se l'email NOM corrisponde allora compare la scritta "Credenziali errate"
       
        -   Stampo in pagina il risultato (document.getElement...innerHTML) 
*/

let emailsEl = ["boolean@99", "besthacker@76", "anonimous@56", "mr.robot@23"];

let userEmailEl = document.getElementById("user_email");

let checkButtonEl = document.getElementById("check_button");

checkButtonEl.addEventListener("click", function() {

    let emailCheckerEl = false;

    for (let i = 0; i < emailsEl.length; i++) {
  
        if (userEmailEl.value === emailsEl[i]) {
            emailCheckerEl = true;
            break;
        }
    }
    
    let resultTextEl = document.getElementById("result_text");    

    if (emailCheckerEl === true) {
        resultTextEl.innerHTML = "Credenziali corrette";
        
    } else {
        resultTextEl.innerHTML = "Credenziali errate";
    }
});

/*  Consegna Dice Game:
    -   In HTML:
        -    creo un bottone (<botton></botton>) per poter inviare tale email

    -  In JS: 
        -    Crea un array che contenga la lista di tutti i numeri da 1 a 6 (crea variabile let + array)

        -   Agganciare il pulsante (<button></button>) affinché l'input possa essere trasmesso (crea variabile let + document-getElement...)

        -   Mettere in ascolto il pulsante (<button></button>) affinché possa reagire ad un determinato evento in questo caso l'evento è il "click del mouse" (add.EventListsner("click", e far partire la funzione anonima function())

        -   Agganciare gli elementi HTML dell'utente e del bot all'interno dei quali verrà mostrato i NUMERI scelti della scelta randomica

        -   Agganciare l'elemento HTML che mostra la vincità, la perdita o il pareggio

        -  Generare un numero random da 1 a 6 sia per il giocatore sia per il computer (Math.floor( ( Math.random)

    If/Else:
    Stabilire il vincitore in base a chi fa il punteggio più alto (if/else)
*/


let botChoiceElements = [1, 2, 3, 4, 5, 6 ];

let playButtonEl = document.getElementById("dice_button");

let botResultEl = document.getElementById("bot_result");

let userResultEl = document.getElementById("user_result");

let resultGameTextEl = document.getElementById("result_game_text");

playButtonEl.addEventListener("click", function() {

    let botNumber = Math.floor((Math.random() * 6)+1);
    let userNumberEl = Math.floor((Math.random() * 6)+1);

    if (botNumber > userNumberEl) {
        botResultEl.innerHTML = `Il bot ha: ${botNumber + 1}`;

        userResultEl.innerHTML = `Tu hai: ${userNumberEl + 1}`;

        resultGameTextEl.innerHTML = "Hai perso";

    } else if (botNumber < userNumberEl) {
        botResultEl.innerHTML = `Il bot ha: ${botNumber + 1}`;    
        
        userResultEl.innerHTML = `Tu hai: ${userNumberEl + 1}`;

        resultGameTextEl.innerHTML = "Hai vinto";

    } else if (botNumber === userNumberEl) {
        botResultEl.innerHTML = `Il bot ha: ${botNumber + 1}`;

        userResultEl.innerHTML = `Tu hai: ${userNumberEl + 1}`;

        resultGameTextEl.innerHTM = "Pari merito";
    }
})

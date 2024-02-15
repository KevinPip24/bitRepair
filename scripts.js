
//Pasquale
 // Array di utenti con nomi utente e password
const utenti = [
    { email: "utente1@email.it", password: "password1" },
    { email: "utente2@email.it", password: "password2" }, 
    { email: "utente3@email.it", password: "password3" }
];

// Funzione per il login
// Funzione per il login
function login() {
    const email = document.getElementById("username").value; // Ora stiamo usando l'email come username
    const password = document.getElementById("password").value;

    // Verifica se le credenziali sono corrette
    const utenteTrovato = utenti.find(utente => utente.email === email && utente.password === password);
    if (utenteTrovato) {
        // Credenziali corrette, effettua l'accesso
        alert("Accesso riuscito! Benvenuto, " + email);

        // Modifica l'URL della pagina per indirizzare l'utente a una pagina specifica
        window.location.href = "index2.html?";
    } else {
        // Credenziali errate, mostra un messaggio di errore
        alert("Credenziali errate. Riprova.");
    }
}


const tecnici = [
    { username: "tecnico1", password: "password1" },
    { username: "tecnico2", password: "password2" },
    { username: "tecnico3", password: "password3" }
];

// Funzione per il login
function logintec() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verifica se le credenziali sono corrette
    const tecnicoTrovato = tecnici.find(tecnico => tecnico.username === username && tecnico.password === password);
    if (tecnicoTrovato) {
        // Credenziali corrette, effettua l'accesso
        alert("Accesso riuscito! Benvenuto, " + username);
        window.location.href = "index2.html";
        // Aggiungi qui il codice per reindirizzare l'utente alla pagina successiva
    } else {
        // Credenziali errate, mostra un messaggio di errore
        alert("Credenziali errate. Riprova.");
    }
} 

// Definisci un array per le traduzioni in italiano
var translationsIt = {
    'pageTitle-it': 'Bit Repair Assistenza Tecnica',
    'utente': 'Utente',
    'tecnico': 'Tecnico',
    'benvenuto': 'Benvenuto Utente',
    'benvenuto-tecnico':'Benvenuto Tecnico',
    'paragrafo': 'Accedi per inserire le tue richieste',
    'email': 'Email:',
    'password': 'Password',
    'accedi': 'Accedi',
    'registrati': 'Non hai un account ? Registati',
    'reg':'Registrati',
    'richiesta':'Registrati e gestisci le tue richieste',
    'nome':'Nome',
    'cognome':'Cognome',
    'conferma': 'Conferma password',
    'foot1': 'Contattateci',
    'foot2': 'Telefono: 0952236779',
    'foot3': 'Via: Crispi, 95122, Roma',
    'foot4': 'Seguiteci'
  };

var translationsEn = {
    'pageTitle-it': 'Bit Repair Technical Assistance',
    'utente': 'User',
    'tecnico': 'Expert',
    'benvenuto': 'Welcome User',
    'benvenuto-tecnico':'Welcome User',
    'paragrafo': 'Log in to place your requests',
    'email': 'Email',
    'password': 'password',
    'accedi': 'ogin',
    'registrati': 'Do not have an account? Sign in',
    'reg':'Sign in',
    'richiesta':'Register and manage your requests',
    'nome':'Name',
    'cognome':'Surname',
    'conferma-password':'Confirm password',
      'iscriviti': "Subscribe",
      'foot1': 'Contact us',
      'foot2': 'Telephone: 0952236779',
      'foot3': 'Street: Crispi, 95122, Roma',
      'foot4': 'Follow us'

  };

   // Funzione per cambiare la lingua
function cambiaLingua(lang) {
    var translations = lang === 'it' ? translationsIt : translationsEn;

    // Imposta il testo degli elementi con attributo "data-lang"
    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function (element) {
        var key = element.getAttribute('data-lang');
        if (translations[key]) {
            element.innerText = translations[key];
        }
    });

    // Imposta i placeholder per gli input
    var placeholders = document.querySelectorAll('input[placeholder]');
    placeholders.forEach(function (input) {
        var key = 'placeholder-' + input.id;
        if (translations[key]) {
            input.placeholder = translations[key];
        }
    });

    // Aggiorna il titolo della pagina
    document.title = translations['pageTitle-it'] || 'Form di Richiesta Assistenza Tecnica';
}


window.onload = function () {
    cambiaLingua('it');
}



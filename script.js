function aggiungiStato() {
    var sceltaTecnico = document.getElementById("sceltaTecnico").value;
    var utente = document.getElementById("utente").value;
    var dataInizio = document.getElementById("data-inizio").value;
    var dataFine = document.getElementById("data-fine").value;
    var stato = document.getElementById("stato").value;
    var descrizione = document.getElementById("descrizione").value;
    var numeroSerie = document.getElementById("numero-serie").value;

    if (sceltaTecnico === "" || utente === "" || dataInizio === "" || dataFine === "" || stato === "" || descrizione === "" || numeroSerie === "") {
        alert("Compila tutti i campi");
        return false;
    }

    var tabella = document.getElementById("tabella");

    var riga = document.createElement("tr");
    riga.innerHTML = "<td>" + utente + "</td>" +
                     "<td>" + dataInizio + "</td>" +
                     "<td>" + dataFine + "</td>" +
                     "<td>" + stato + "</td>" +
                     "<td>" + descrizione + "</td>" +
                     "<td>" + numeroSerie + "</td>";

    tabella.appendChild(riga);

    // Clear input fields after adding data to the table
    document.getElementById("utente").value = "";
    document.getElementById("data-inizio").value = "";
    document.getElementById("data-fine").value = "";
    document.getElementById("stato").value = "";
    document.getElementById("descrizione").value = "";
    document.getElementById("numero-serie").value = "";

    return true;
}

var translationsIt = {
    'scelta': 'Scegli il tuo Tecnico:',
    'utente': 'Nome Utente:',
    'data-inizio': 'Data Inizio:',
    'data-fine': 'Data Fine:',
    'stato': 'Stato:',
    'descrizione': 'Descrizione:',
    'numero-serie': 'Numero Serie:',
    'nome-utente1': 'Nome Utente:',
    'data-inizio1': 'Data Inizio:',
    'data-fine1': 'Data Fine:',
    'stato1': 'stato:',
    'descrizione1': 'descrizione:',
    'numero-serie1': 'Numero Serie:',
    'dati-inseriti': 'Dati Inseriti:',
    'tecnico2-it': 'Tecnico 2',
    'tecnico3-it': 'Tecnico 3',
    //footer
    'foot1': 'Contattateci',
    'foot2': 'Telefono: 0952236779',
    'foot3': 'Via: Crispi, 95122, Roma',
    'foot4': 'Seguiteci',
};

// Definisci un array per le traduzioni in inglese
var translationsEn = {
    'scelta': 'Choose your Technician:',
    'utente': 'UserName:',
    'data-inizio': 'Start Date:',
    'data-fine': 'End Date:',
    'stato': 'State:',
    'descrizione': 'Description:',
    'numero-serie': 'Series Number:',
    'nome-utente1': 'UserName:',
    'data-inizio1': 'Start Date:',
    'data-fine1': 'End Date:',
    'stato1': 'State:',
    'descrizione1': 'Description:',
    'numero-serie1': 'Series Number:',
    'dati-inseriti': 'Data Entered',
    'tecnico2-it': 'Technician 2',
    'tecnico3-it': 'Technician 3',
    'foot1': 'Contact us',
    'foot2': 'Telephone: 0952236779',
    'foot3': 'Street: Crispi, 95122, Roma',
    'foot4': 'Follow us',
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
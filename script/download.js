// Funzione per gestire il download dei file PDF in base all'anno selezionato
function getPdf(event) {
  // Recupero l'anno selezionato dall'elemento <select>
  const selectedYear = event.target.value;
  //console.log(selectedYear); // Log dell'anno selezionato per debug
  
  // Creazione del percorso base per i file relativi all'anno selezionato
  const pathToFile = 'reports/' + selectedYear + '/';
  
  // Mappatura dei file disponibili.
  // Nota: In assenza di un server, è necessario definire manualmente i file associati agli anni.
  const files = {
    '2023': ['Lavazza_BdS2023_ABSTRACT_ITA_digital_affiancate.pdf'],    // File associato al 2023
    '2022': ['Lavazza_BS_2022_ITA.pdf'],                                // File associato al 2022
  };

  // Recupero i file disponibili per l'anno selezionato dalla mappatura
  const file = files[selectedYear] || []; // Se l'anno non è mappato nell'array, ritorna un array vuoto (|| indica l'operatore OR)

  // Recupero l'elemento HTML dove saranno mostrati i link ai file PDF
  const mostraPdf = document.getElementById('mostraPdf');
  mostraPdf.innerHTML = ''; // Reset del contenuto per evitare duplicati
  
  
  if (file.length === 0) {// Se non ci sono file disponibili per l'anno selezionato, mostro un messaggio di avviso
    showAlert();                      // Mostra il messaggio di avviso
    mostraPdf.innerHTML = '';         // Assicura che il contenitore rimanga vuoto
    document.title = 'PW - Download non disponibile';  // Aggiorna il titolo della pagina
    return;                           // Termina l'esecuzione della funzione
  } else {// Se ci sono file disponibili, nascondo il messaggio di avviso
    mostraPdf.innerHTML = '';         // Assicura che il contenitore sia pronto per nuovi contenuti
    hideAlert();                      // Nasconde l'eventuale messaggio di avviso
    document.title = 'PW - Download ' + selectedYear;
  }
  
  // Creazione dinamica di un link per ciascun file disponibile
  file.forEach((f) => {
    const a = document.createElement('a');  // Crea un elemento <a>
    a.href = pathToFile + f;                // Imposta l'attributo href al percorso del file
    a.target = '_blank';                    // Apre il link in una nuova scheda
    a.innerText = f;                        // Imposta il nome del file come testo visibile del link
    a.download = f;                         // Suggerisce il download del file con il nome specificato
    a.style.display = 'block';              // Mostra il link come blocco per evitare sovrapposizioni
    mostraPdf.appendChild(a);               // Aggiunge il link all'elemento contenitore
  });
}

// Funzione per mostrare un messaggio di avviso
function showAlert() {
  const alertBox = document.getElementById('alert'); // Recupero l'elemento del messaggio di avviso
  alertBox.classList.remove('hidden');               // Rimuove la classe che nasconde il messaggio
  alertBox.classList.add('visible');                 // Aggiunge la classe per rendere visibile il messaggio
}

// Funzione per nascondere il messaggio di avviso
function hideAlert() {
  const alertBox = document.getElementById('alert'); // Recupero l'elemento del messaggio di avviso
  alertBox.classList.remove('visible');              // Rimuove la classe che rende visibile il messaggio
  alertBox.classList.add('hidden');                  // Aggiunge la classe per nascondere il messaggio
}

/*
  funzione per la gestione al click di un link della navbar
  quando si clicca su un link della navbar, la pagina scorre fino alla sezione corrispondente (anchor)
  e colora temporaneamente lo sfondo della sezione per evidenziarla.

  il ciclo forEach() viene utilizzato per aggiungere un event listener a ciascun link della navbar.
  l'event listener intercetta l'evento click.
  il metodo scrollIntoView() è supportato da tutti i browser moderni.

  targetid è l'id dell'elemento a cui si vuole far scorrere la pagina 
  e si usa il metodo substring() per rimuovere il carattere "#" dall'href.

  il colore di sfondo viene impostato a "#e0f2f1" (verde chiaro) per 2 secondi
  e poi reimpostato a quello di default.

  la funzione setTimeout() viene utilizzata per impostare un timeout di 2 secondi al fine
  di rimuovere il background.
*/ 
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
    targetElement.style.backgroundColor = '#e0f2f1'; 
    setTimeout(() => {
      targetElement.style.backgroundColor = ''; 
    }, 2000);
  });
});
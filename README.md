# L-31 Project Work

Questo progetto è stato creato come parte del corso L-31. La pagina web permette agli utenti di selezionare e scaricare i report di sostenibilità dell'azienda Lavazza per gli anni disponibili.

## Funzionalità

- **Navbar**: Contiene il logo di UniPegaso, utilizzato a scopo estetico.
- **Selezione Anno**: Una combobox permette agli utenti di selezionare l'anno del report di sostenibilità che desiderano scaricare.
- **Download PDF**: In base all'anno selezionato, vengono mostrati i link per scaricare i file PDF disponibili.
- **Messaggio di Avviso**: Se il report per l'anno selezionato non è disponibile, viene mostrato un messaggio di avviso.
- **Aggiornamento Titolo**: Il titolo della pagina viene aggiornato in base all'anno selezionato.
- **Stile Responsive**: La pagina è stilizzata per essere responsive e facile da navigare.
- **Effetti Hover**: Effetti hover per i div di descrizione per migliorare l'interattività.
- **Scroll e Evidenziazione**: Quando si clicca su un link della navbar, la pagina scorre fino alla sezione corrispondente e colora temporaneamente lo sfondo della sezione per evidenziarla.

## Struttura dei File

- **index.html**: Contiene la struttura HTML della pagina.
- **style/global.css**: Contiene gli stili CSS per la pagina.
- **script/download.js**: Contiene la logica JavaScript per gestire il download dei file PDF e la funzione di scroll.

## Come Funziona

1. **Selezione Anno**: L'utente seleziona un anno dalla combobox.
2. **Gestione Evento**: La funzione `getPdf` viene chiamata al cambiamento della selezione.
3. **Verifica Disponibilità**: La funzione verifica se ci sono file PDF disponibili per l'anno selezionato.
4. **Mostra Link**: Se i file sono disponibili, vengono mostrati i link per il download. Altrimenti, viene mostrato un messaggio di avviso.
5. **Aggiornamento Titolo**: Il titolo della pagina viene aggiornato in base all'anno selezionato.
6. **Scroll e Evidenziazione**: Quando si clicca su un link della navbar, la pagina scorre fino alla sezione corrispondente e colora temporaneamente lo sfondo della sezione per evidenziarla.

## Sezioni della Pagina

- **Descrizione del Progetto**: Spiega lo scopo del progetto e le funzionalità principali.
- **Descrizione dei Report**: Fornisce informazioni generali sui report di sostenibilità.
- **Informazioni su Lavazza**: Fornisce una breve descrizione dell'azienda Lavazza.

## Autore

Questa pagina è stata creata da Denis Cazzulo, matricola 0312201729.

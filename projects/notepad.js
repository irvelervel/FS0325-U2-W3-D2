// il progetto dovrà avere 3 funzionalità:
// a) pulsante SALVA -> salveremo il contenuto della textarea nel localStorage, in una chiave prefissata
// b) pulsante CARICA -> se la chiave prefissata esiste già nel localStorage, recupereremo il suo valore associato e lo utilizzeremo per riempire la textarea
// c) pulsante RESET -> svuota la textarea e elimina la chiave prefissata (se esistente) dal localStorage

// utilizzo il localStorage per permettere alla memoria di sopravvivere ad una chiusura del tab/browser

// ---
// recupero un riferimento alla textarea
const textarea = document.getElementById('content')
// recupero 3 riferimenti per i 3 bottoni
const saveButton = document.getElementById('save')
const loadButton = document.getElementById('load')
const resetButton = document.getElementById('reset')
// creiamo un nome per la chiave che utilizzeremo per la memoria
const memoryKey = 'notepad-memory'

// a)
saveButton.addEventListener('click', function () {
  // qua non mi serve "neutralizzare" nessun evento di submit
  console.log('SALVO')
  // recupero il contenuto testuale della textarea
  const textAreaContent = textarea.value // contenuto testuale della textarea
  // salvataggio di questa stringa nel localStorage sulla chiave prefissata
  localStorage.setItem(memoryKey, textAreaContent)
  alert('CONTENUTO SALVATO')
})

// b)
loadButton.addEventListener('click', function () {
  // qua non mi serve "neutralizzare" nessun evento di submit
  const savedContent = localStorage.getItem(memoryKey)
  // a questo punto, savedContent può essere una stringa oppure null
  if (savedContent !== null) {
    textarea.value = savedContent
    alert('CONTENUTO CARICATO')
  } else {
    alert('NESSUN CONTENUTO SALVATO')
  }
})

// c)
resetButton.addEventListener('click', function () {
  // qua non mi serve "neutralizzare" nessun evento di submit
  // svuoto la textarea
  textarea.value = ''
  // svuotare la chiave prefissata nel localStorage
  localStorage.removeItem(memoryKey)
  alert('NOTEPAD RESETTATO')
})

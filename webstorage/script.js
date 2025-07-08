// le tecnologie di WEB STORAGE integrate nei moderni browser rappresentano un'alternativa alle preesistenti tecnologie di memorizzazione locale (cookies)
// localStorage e sessionStorage nascono con la standardizzazione di HTML5

// Queste due tecnologie migliorano i cookies superando le loro due principali
// limitazioni:
// 1) I cookies possono contenere al massimo 4KB di dati (mentre local/session 5MB)
// 2) I cookies NON possiedono il concetto di "sessione"

// localStorage e sessionStorage condividono le metodologie di funzionamento ma hanno una sostanziale differenza: localStorage memorizza i dati fino alla manuale rimozione da parte del codice (o se l'utente effettua qualche operazione di "pulizia"), mentre sessionStorage viene auto-eliminato alla fine della sessione corrente (quando l'utente chiude il tab o il browser interamente)

// localStorage viene tradizionalmente utilizzato per memorizzare preferenze utente, QOL improvements, token di autenticazione (per evitare continui login) etc.
// sessionStorage, data la sua natura invece più effimera, viene utilizzato per memorizzare informazioni sensibili o dati di natura più critica (token di accesso home banking, informazioni di sicurezza)

// sia localStorage che sessionStorage sono divisi in "tabelle" specifiche per DOMINIO: il JS eseguito su amazon.com non può accedere al localStorage salvato per facebook.com etc.

// come possiamo da sviluppatori interagire con questi motori di storage:
// localStorage e sessionStorage sono già integrate in JS
// possiamo utilizzare i metodi:
// - setItem(chiave, valore) -> salva una nuovo coppia chiave/valore
// - getItem(chiave) -> restituisce il valore di una determinata chiave
// - removeItem(chiave) -> elimina la proprietà dotata di chiave fornita
// - clear() -> svuota completamente la memoria selezionata

localStorage.setItem('theme-color', 'dark')

const retrievedValue = localStorage.getItem('theme-color')
console.log(retrievedValue)

const x = localStorage.getItem('giangiorgio')
console.log(x) // dovrebbe essere null

localStorage.removeItem('theme-color')
localStorage.clear() // eliminate tutto il contenuto del localStorage in un colpo solo

localStorage.setItem('oggetto', { teacher: 'GianGiorgioooo!!!!' })
localStorage.setItem('array', ['gian', 'giorgio'])
// come potrete notare nel localStorage, alla chiave "oggetto" è stato associato
// un valore completamente sballato: "[object Object]"
// come mai? beh, perchè JS è TERRIBILE nel cercare di convertire oggetti in stringhe!

// in altre situazioni, come ad esempio questa:
localStorage.setItem('myNumber', 100)
localStorage.setItem('myBoolean', false)

// provo a recuperare il numero associato alla chiave "myNumber"
const isThisANumber = localStorage.getItem('myNumber')
console.log(isThisANumber + 1) // è una stringa!!!

// quindi in realtà i dati vengono preservati nel loro salvataggio negli storage,
// fermo restando che verranno in seguito recuperati come stringhe, tranne che
// per le entità complesse: oggetti e array, con i quali questa conversione automatica
// da parte di JS non ottiene buoni risultati.

// come convertiamo in maniera "reversibile" entità complesse come array e oggetti?
// dobbiamo trovare un modo per "stringhifizzare" queste entità complesse
const giorgio = JSON.stringify({ teacher: 'GianGiorgioooo!!!!' })
console.log('GIORGIO IN STRINGA', giorgio)
localStorage.setItem('oggettoCorretto', giorgio)

// e per ritirarlo fuori?
const giorgioAsString = localStorage.getItem('oggettoCorretto')
// solo che è una stringa! dovremmo ri-trasformarlo in oggetto...
const giorgioAgain = JSON.parse(giorgioAsString)
console.log(giorgioAgain)

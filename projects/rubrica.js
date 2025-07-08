// creiamo una costante con il nome della chiave che andrò ad utilizzare
// nel localStorage
const memoryKey = 'contacts-memory'

const generateCard = function (contatto) {
  const contactsRow = document.getElementById('contacts-row')
  contactsRow.innerHTML += `
      <div class="col col-12 col-md-4 col-lg-3">
        <div class="card">
          <img src="https://placecats.com/300/300" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${contatto.firstName} ${contatto.lastName}</h5>
            <p class="card-text">${contatto.phone}</p>
          </div>
        </div>
      </div>
    `
}

// contactsArray sarà l'array dei contatti recuperati dal localStorage; in caso
// non ce ne siano, allora partirà da array vuoto

// VERSIONE HARD
// const contactsArray = localStorage.getItem(memoryKey)
//   ? JSON.parse(localStorage.getItem(memoryKey))
//   : []
// VERSIONE EASY
let contactsArray
if (localStorage.getItem(memoryKey)) {
  contactsArray = JSON.parse(localStorage.getItem(memoryKey))
} else {
  contactsArray = []
}
console.log('contactsArray', contactsArray)

if (contactsArray.length > 0) {
  // se abbiamo dei contatti precedentemente salvati...
  contactsArray.forEach((contatto) => {
    generateCard(contatto)
  })
}

// qui dentro inseriremo la logica per recuperare i valori dal form
// e creare un oggetto relativo al contatto salvato utilizzando una classe JS

// creiamo una CLASSE per generare un oggetto di tipo Contact
class Contact {
  constructor(_firstName, _lastName, _phone) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.phone = _phone
  }
  prefix = '+39'
  favourite = false
}

// cominciamo raccogliendo i riferimenti ai 3 campi del form
const firstNameInput = document.getElementById('firstName') // <input>
const lastNameInput = document.getElementById('lastName') // <input>
const phoneInput = document.getElementById('phone') // <input>

// recupero il riferimento al FORM e intervengo sul suo evento di "submit"
const formElement = document.getElementById('rubrica-form')
formElement.addEventListener('submit', function (e) {
  e.preventDefault() // così la pagina non si aggiorna
  // ora sono libero di proseguire con il recupero dati
  const nuovoContatto = new Contact(
    firstNameInput.value,
    lastNameInput.value,
    phoneInput.value
  )
  console.log('Ho creato un contatto', nuovoContatto)
  // appendo il contatto nel DOM
  generateCard(nuovoContatto)
  // provvedo anche a salvare il contatto appena creato nel localStorage
  // prima di tutto lo pusho nel contactsArray che ho definito in JS
  contactsArray.push(nuovoContatto)
  // ora contactsArray ha almeno un oggetto, devo salvarlo in localStorage
  localStorage.setItem(memoryKey, JSON.stringify(contactsArray))

  // svuoto il form
  formElement.reset()
})

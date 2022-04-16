
const modalTab = document.querySelector('.modal');
let form = document.getElementById('form-content');
let pathAPI = "http://localhost:3000/cards"
// Setting time and date
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
document.getElementById("header-date").innerHTML = day + "/" + month + "/" + year;

function time() {
  let hours = new Date();
  let h = hours.getHours();
  let min = hours.getMinutes();
  if (min < 10) {
    document.getElementById("header-time").innerHTML = h + ": 0" + min;
  } else {
    document.getElementById("header-time").innerHTML = h + ":" + min;
  }
  setTimeout('time ()', 60000);
}

// Creating notification card
if (form) {
  function saveForm() {
    let cardHTML
    let cardData = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      date: document.getElementById('date').value,
      status: document.getElementById('status').value
    }
    populatedData(cardData);
    let cardDate = cardData.date.split('-').reverse().join('/');

    if (cardData.status === 'to-do') {
      cardHTML = `
        <div class="card-notification" id="${cardData.id}">
          <h3 class="card-notification__title" id="title__${cardData.id}">
            ${cardData.title}
          </h3>
          <p class="card-notification__description" id="description__${cardData.id}">
            ${cardData.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date" id="date__${cardData.id}">${cardDate}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
          </div>
        </div>
      `
      const creatingCard = document.getElementById('grid-1__cards')
      creatingCard.insertAdjacentHTML("beforeend", cardHTML)
    } else if (cardData.status === 'progress') {
      cardHTML = `
        <div class="card-notification" id="${cardData.id}">
          <h3 class="card-notification__title" id="title__${cardData.id}">
            ${cardData.title}
          </h3>
          <p class="card-notification__description" id="description__${cardData.id}">
            ${cardData.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date" id="date__${cardData.id}">${cardDate}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
          </div>
        </div>
      `
      const creatingCard2 = document.getElementById('grid-2__cards')
      creatingCard2.insertAdjacentHTML("beforeend", cardHTML)
    } else if (cardData.status === 'done') {
      cardHTML = `
        <div class="card-notification" id="${cardData.id}">
          <h3 class="card-notification__title" id="title__${cardData.id}">
            ${cardData.title} 
          </h3>
          <p class="card-notification__description" id="description__${cardData.id}">
            ${cardData.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date" id="date__${cardData.id}">${cardDate}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
          </div>
        </div>
      `
      const creatingCard3 = document.getElementById('grid-3__cards')
      creatingCard3.insertAdjacentHTML("beforeend", cardHTML)
    }

    modalTab.classList.remove('active');
  }
}

function populatedData(cardData) {
  fetch(pathAPI, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cardData)
  });
}

// Loading the existing notification cards
async function loadingCards() {
  await fetch(pathAPI)
    .then(response => {
      if (!response.ok)
        throw new Error("Erro na requisição");
      return response.json()
    })
    .then(cards => {
      populatedCards(cards);
      // removeCardDb(cards);
    }).catch(erro => console.log(erro))
}

function populatedCards(cards) {
  console.log(cards);
  cards.forEach(cards => {
    let cardDate = cards.date.split('-').reverse().join('/');
    let cardHTML
    if (cards.status === 'to-do') {
      cardHTML = `
        <div class="card-notification" id="${cards.id}">
          <h3 class="card-notification__title" id="title__${cards.id}">
            ${cards.title}
          </h3>
          <p class="card-notification__description" id="description__${cards.id}">
            ${cards.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date" id="date__${cards.id}">${cardDate}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
          </div>
        </div>
      `
      const creatingCard = document.getElementById('grid-1__cards')
      creatingCard.insertAdjacentHTML("beforeend", cardHTML)
    } else if (cards.status === 'progress') {
      cardHTML = `
        <div class="card-notification" id="${cards.id}">
          <h3 class="card-notification__title" id="title__${cards.id}">
            ${cards.title}
          </h3>
          <p class="card-notification__description" id="description__${cards.id}">
            ${cards.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date" id="date__${cards.id}">${cardDate}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
          </div>
        </div>
      `
      const creatingCard2 = document.getElementById('grid-2__cards')
      creatingCard2.insertAdjacentHTML("beforeend", cardHTML)
    } else if (cards.status === 'done') {
      cardHTML = `
        <div class="card-notification" id="${cards.id}">
          <h3 class="card-notification__title" id="title__${cards.id}"> 
            ${cards.title}
          </h3>
          <p class="card-notification__description id="description__${cards.id}">
            ${cards.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date" id="date__${cards.id}">${cardDate}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
          </div>
        </div>
      `
      const creatingCard3 = document.getElementById('grid-3__cards')
      creatingCard3.insertAdjacentHTML("beforeend", cardHTML)
    }
  });
}

// Remove cards

function removeCard(item) {

  const mainCardDiv = item.parentNode.parentNode.parentNode;
  const mainCardId = mainCardDiv.id;
  console.log(mainCardId);
  mainCardDiv.remove();
  fetch("http://localhost:3000/cards/" + mainCardId, {
    method: "Delete",
  })
}

// Edit cards
function editingCard(item) {
  const mainCardDiv = item.parentNode.parentNode.parentNode;
  const id = mainCardDiv.id;
  fetch("http://localhost:3000/cards/" + id)
    .then(response => response.json())
    .then(data => {
      let form = document.getElementById('form-content')
      form.title.value = data.title
      form.description.value = data.description
      form.date.value = data.date
      const selectForm = document.getElementById('status')
      if (data.status === 'to-do') {
        selectForm.selectedIndex = 0

      } else if (data.status === 'progress') {
        selectForm.selectedIndex = 1

      } else if (data.status === 'done') {
        selectForm.selectedIndex = 2
      }
    })
  openPopup();
  openModal();
}

// to OPEN Modal e Popup
function openModal() {
  const modalTab = document.querySelector('.modal');
  modalTab.classList.add('active');
};

function openPopup(element) {
  let divPopup = document.querySelector('.card-notification__infos--popup');
  if (divPopup) {
    divPopup.remove();
  }
  else {
    const divParentPopup = element.parentNode
    let popupHTML = `
        <div class="card-notification__infos--popup" id="popup">
          <span class="card-notification__infos--popup-item" onclick="removeCard(this)">Delete</span>
          <span class="card-notification__infos--popup-item" onclick="editingCard(this)">Edit</span>
        </div>
      `
    divParentPopup.insertAdjacentHTML("beforeend", popupHTML)
    divPopup = document.querySelector('.card-notification__infos--popup');
    divPopup.classList.add('active');
  }

};

// ESC to close modal and popup
document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    console.log('Tecla ESC');
    const popupTab = document.querySelector('.card-notification__infos--popup');
    if (modalTab.classList.contains('active')) {
      modalTab.classList.remove('active');
    }
    if (popupTab.classList.contains('active')) {
      popupTab.remove();
    }
  }
});




loadingCards();
time();

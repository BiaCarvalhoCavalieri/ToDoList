
const modalTab = document.querySelector('.modal');
let form = document.getElementById('form-content');
let pathAPI = "http://localhost:3000/cards"

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

    if (cardData.status === 'to-do') {
      cardHTML = `
        <div class="card-notification" id="card-id__${cardData.id}">
          <h3 class="card-notification__title">
            ${cardData.title}
          </h3>
          <p class="card-notification__description">
            ${cardData.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date">${cardData.date}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
            <div class="card-notification__infos--popup">
              <span class="card-notification__infos--popup-item">Delete</span>
              <span class="card-notification__infos--popup-item">Edit</span>
            </div>
          </div>
        </div>
      `
      const creatingCard = document.getElementById('grid-1__cards')
      creatingCard.insertAdjacentHTML("beforeend", cardHTML)
    } else if (cardData.status === 'progress') {
      cardHTML = `
        <div class="card-notification" id="card-id__${cardData.id}">
          <h3 class="card-notification__title">
            ${cardData.title}
          </h3>
          <p class="card-notification__description">
            ${cardData.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date">${cardData.date}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
            <div class="card-notification__infos--popup">
              <span class="card-notification__infos--popup-item">Delete</span>
              <span class="card-notification__infos--popup-item">Edit</span>
            </div>
          </div>
        </div>
      `
      const creatingCard2 = document.getElementById('grid-2__cards')
      creatingCard2.insertAdjacentHTML("beforeend", cardHTML)
    } else if (cardData.status === 'done') {
      cardHTML = `
        <div class="card-notification" id="card-id__${cardData.id}">
          <h3 class="card-notification__title">
            ${cardData.title}
          </h3>
          <p class="card-notification__description">
            ${cardData.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date">${cardData.date}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
            <div class="card-notification__infos--popup">
              <span class="card-notification__infos--popup-item">Delete</span>
              <span class="card-notification__infos--popup-item">Edit</span>
            </div>
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
    }).catch(erro => console.log(erro))
}

function populatedCards(cards) {
  console.log(cards);
  cards.forEach(cards => {
    let cardHTML
    if (cards.status === 'to-do') {
      cardHTML = `
        <div class="card-notification" id="card-id__${cards.id}">
          <h3 class="card-notification__title">
            ${cards.title}
          </h3>
          <p class="card-notification__description">
            ${cards.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date">${cards.date}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
            <div class="card-notification__infos--popup">
              <span class="card-notification__infos--popup-item">Delete</span>
              <span class="card-notification__infos--popup-item">Edit</span>
            </div>
          </div>
        </div>
      `
      const creatingCard = document.getElementById('grid-1__cards')
      creatingCard.insertAdjacentHTML("beforeend", cardHTML)
    } else if (cards.status === 'progress') {
      cardHTML = `
        <div class="card-notification" id="card-id__${cards.id}">
          <h3 class="card-notification__title">
            ${cards.title}
          </h3>
          <p class="card-notification__description">
            ${cards.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date">${cards.date}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
            <div class="card-notification__infos--popup">
              <span class="card-notification__infos--popup-item">Delete</span>
              <span class="card-notification__infos--popup-item">Edit</span>
            </div>
          </div>
        </div>
      `
      const creatingCard2 = document.getElementById('grid-2__cards')
      creatingCard2.insertAdjacentHTML("beforeend", cardHTML)
    } else if (cards.status === 'done') {
      cardHTML = `
        <div class="card-notification" id="card-id__${cards.id}">
          <h3 class="card-notification__title">
            ${cards.title}
          </h3>
          <p class="card-notification__description">
            ${cards.description}
          </h3>
          </p>
          <div class="card-notification__infos">
            <span class="card-notification__infos--date">${cards.date}</span>
            <button class="card-notification__infos--btn" onclick="openPopup(this)">
              <svg class="card-notification__infos--btn-icon" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6582 3.60677L20.3086 7.5217C20.4624 7.68663 20.4624 7.95573 20.3086 8.12066L11.4699 17.5998L7.71425 18.0469C7.21242 18.1076 6.78749 17.6519 6.84414 17.1137L7.26099 13.0859L16.0997 3.60677C16.2535 3.44184 16.5044 3.44184 16.6582 3.60677ZM23.2143 2.61285L21.2394 0.494792C20.6242 -0.164931 19.6246 -0.164931 19.0054 0.494792L17.5728 2.03125C17.419 2.19618 17.419 2.46528 17.5728 2.63021L21.2232 6.54514C21.377 6.71007 21.6279 6.71007 21.7817 6.54514L23.2143 5.00868C23.8295 4.34462 23.8295 3.27257 23.2143 2.61285V2.61285ZM15.9054 15.0217V19.4401H2.95496V5.55122H12.255C12.3845 5.55122 12.5059 5.49479 12.599 5.39931L14.2178 3.66319C14.5254 3.33333 14.3068 2.77344 13.8738 2.77344H2.30744C1.23498 2.77344 0.364868 3.7066 0.364868 4.85677V20.1345C0.364868 21.2847 1.23498 22.2179 2.30744 22.2179H16.5529C17.6254 22.2179 18.4955 21.2847 18.4955 20.1345V13.2856C18.4955 12.8212 17.9734 12.5911 17.6659 12.9167L16.0471 14.6528C15.958 14.7526 15.9054 14.8828 15.9054 15.0217Z" fill="#333333"/>
              </svg>  
            </button>
            <div class="card-notification__infos--popup">
              <span class="card-notification__infos--popup-item">Delete</span>
              <span class="card-notification__infos--popup-item">Edit</span>
            </div>
          </div>
        </div>
      `
      const creatingCard3 = document.getElementById('grid-3__cards')
      creatingCard3.insertAdjacentHTML("beforeend", cardHTML)
    }
  });
}

// to OPEN Modal e Popup
function openModal() {
  const modalTab = document.querySelector('.modal');
  modalTab.classList.add('active');
};

function openPopup(element) {
  const divPopup = element.nextElementSibling
  if (divPopup.classList.contains('active')) {
    divPopup.classList.remove('active');
  } else {
    divPopup.classList.add('active')
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
      popupTab.classList.remove('active');
    }
  }
});




loadingCards();

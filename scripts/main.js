function openModal() {
  const modalTab = document.querySelector('.modal');
  modalTab.classList.add('active');
};

function openPopup() {
  const popupTab = document.querySelector('.card-notification__infos--popup');
  if (popupTab.classList.contains('active')) {
    popupTab.classList.remove('active');
  } else {
    popupTab.classList.add('active')
  }
};


document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.code === 'Escape') {
    console.log('você está quase lá');
    const modalTab = document.querySelector('.modal');
    const popupTab = document.querySelector('.card-notification__infos--popup');
    if (modalTab.classList.contains('active')) {
      modalTab.classList.remove('active');
    }
    if (popupTab.classList.contains('active')) {
      popupTab.classList.remove('active');
    }
  }
});
let popup = document.querySelector('.modal-show');
let closeButton = document.querySelector('.modal-close');
let showFormButton = document.querySelector('.contacts__link.red-button');
let pictrueMap = document.querySelector('.contacts > img');
let map = document.querySelector('.map-modal');
let closeMapButton = document.querySelector('.close-map');

pictrueMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    map.classList.remove('visually-hidden');
});

closeMapButton.addEventListener('click', function (evt) {
    evt.preventDefault()
    map.classList.add('visually-hidden');
});

showFormButton.addEventListener('click', function (evt) {
    evt.preventDefault()
    popup.classList.remove('visually-hidden');
});

closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('visually-hidden');
});

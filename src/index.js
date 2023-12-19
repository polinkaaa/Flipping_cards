import 'normalize.css';
import './styles/main.scss';

const cards = document.querySelectorAll('.card'),
imgHid = document.querySelectorAll('.card__img'),
cardDescHid = document.querySelectorAll('.card__description'),
cardDesc = document.querySelectorAll('.card__back_description'),
cardUnion = document.querySelectorAll('.card__union'),
btn = document.querySelector('.main__btn_continue');

cards.forEach(function (item, index) {
    item.addEventListener('click', function () {
        imgHid[index].classList.toggle('hidden');
        cardDescHid[index].classList.toggle('hidden');
        cardDesc[index].classList.toggle('hidden');
        cardUnion[index].classList.toggle('svg_back');
        item.classList.add('checked');
        item.classList.toggle('flipped');
        checkCards();
    });
})

function checkCards() {
    let checked = document.querySelectorAll('.card.checked').length;
    cards.length === checked ? btn.disabled = false : '';
}
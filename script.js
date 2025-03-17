//................cards................
const Cards = document.querySelector('.card-box-last');
const btnCard = document.querySelector('.show-more');
btnCard.addEventListener('click', hideCards);

function hideCards() {
    const currentDisplay = window.getComputedStyle(Cards).display;
    if (currentDisplay === 'none') {
        Cards.style.display = 'flex';
        btnCard.textContent='show less';
    } else {
        Cards.style.display = 'none';
        btnCard.textContent='show ,more';

    }
}
//......................................

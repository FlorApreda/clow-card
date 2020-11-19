const card = document.querySelector('.card__inner')

card.addEventListener("click", flipCard)

function flipCard() { 
  card.classList.toggle('is-flipped')
} 

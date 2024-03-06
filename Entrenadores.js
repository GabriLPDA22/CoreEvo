document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-container');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
    });
  });
  
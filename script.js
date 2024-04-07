// script.js
const cardContainer = document.getElementById('cardContainer');

// Sample data for cards
const cardsData = [
  {
    title: 'Card 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Card 2',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  // Add more cards as needed
];

// Function to create card elements
function createCard(cardData) {
  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h3');
  title.textContent = cardData.title;

  const description = document.createElement('p');
  description.textContent = cardData.description;

  card.appendChild(title);
  card.appendChild(description);

  return card;
}

// Render cards
function renderCards() {
  cardContainer.innerHTML = '';
  cardsData.forEach(cardData => {
    const card = createCard(cardData);
    cardContainer.appendChild(card);
  });
}

// Initial render
renderCards();

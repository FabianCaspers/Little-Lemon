import React from 'react';
import GreekSalad from './assets/icons_assets/greek salad.jpg';
import Bruchetta from './assets/icons_assets/bruchetta.svg';
import LemonDessert from './assets/icons_assets/lemon dessert.jpg';

// Card-Komponente
function Card({ title, description, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <p className="card-price">{price}</p>
    </div>
  );
}

function Specials() {
  // Daten für die Karten
  const specials = [
    { title: 'Greek Salad', description: 'A refreshing medley of cucumbers, tomatoes, olives, and feta cheese, dressed in olive oil and herbs. Perfect for a light lunch or side dish.', price: 'Preis 1', image: GreekSalad },
    { title: 'Bruchetta', description: 'Crispy toasted bread topped with a flavorful mix of ripe tomatoes, fresh basil, garlic, and a drizzle of olive oil. A classic Italian appetizer.', price: 'Preis 2', image: Bruchetta },
    { title: 'Lemon Dessert', description: 'A tangy and sweet lemon-infused dessert that’s sure to delight your taste buds. The perfect finish to any meal.', price: 'Preis 3', image: LemonDessert },
  ];

  return (
    <div>
      <h2>This Week's Specials</h2>
      <p>Check out our specials for this week!</p>
      <div className="cards-container">
        {specials.map((special, index) => (
          <Card key={index} title={special.title} description={special.description} price={special.price} image={special.image} />
        ))}
      </div>
    </div>
  );
}

export default Specials;

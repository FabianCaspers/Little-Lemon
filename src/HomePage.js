import React from 'react';
import logo from './assets/icons_assets/Logo.svg';
import bruchetta from './assets/icons_assets/bruchetta.svg'
import restaurantfood from './assets/icons_assets/restauranfood.jpg'

function HomePage() {
    return (
      <div className='HomePage'>
        <div>
          <h1>Little Lemon</h1>
          <p>Experience a diverse menu of delicious</p>
          <p>dishes delivered right to your doorstep.</p>
          <button>Reserve a table</button>
        </div>

        <div>
          <img src={restaurantfood} alt="restaurantfood" />
        </div>
      </div>
    );
}

export default HomePage;

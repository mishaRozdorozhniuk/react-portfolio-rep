import React from 'react';
import './Categories.css';

const Categoris = () => {
  const categoriesList = ['Nature', 'Photography', 'Relaxation', 'Vacation', 'Travel', 'Adventure'];

  return (
    <section className="categories">
      <div className="container">
        <ul className="categories__list">
          {categoriesList.map((c) => (
            <li className="categories__item" key={c}>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categoris;

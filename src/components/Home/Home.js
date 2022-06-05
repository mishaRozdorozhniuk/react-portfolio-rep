import React from 'react';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
  const [flag, setFlag] = React.useState(false);
  const [show, setShow] = React.useState('');
  const [burger, setBurger] = React.useState('');
  const [adaptiveHeigth, setAdaptiveHeight] = React.useState('');

  const handleChange = () => {
    setFlag(!flag);
    setShow('show-burger');
    setBurger('burger-item-rotate');
    setAdaptiveHeight('home-height');
  };

  return (
    <section className="home">
      <div className="container">
        <Header className={flag ? `${show}` : ''} />
        <div className="burger-wrapper" onClick={handleChange}>
          <span className={flag ? `${burger} burger-item` : 'burger-item'}></span>
          <span className={flag ? `${burger} burger-item` : 'burger-item'}></span>
          <span className={flag ? `${burger} burger-item` : 'burger-item'}></span>
        </div>
        <div className={flag ? `${adaptiveHeigth} home__content` : 'home__content'}>
          <h1>Let's do it together.</h1>
          <p>We travel the world in search of stories. Come along for the ride.</p>
          <button>View Latest Posts</button>
        </div>
      </div>
    </section>
  );
};

export default Home;

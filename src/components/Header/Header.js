import React from 'react';
import NavigatePanel from '../NavigatePanel.js/NavigatePanel';
import './Header.css';

const Header = ({ className }) => {
  const headerItems = ['home', 'categories', 'about', 'contact'];
  // тупо массив с елементами которые будут в хедере, и которые далее передаются пропсами где они потом перебираются в цикле

  return (
    <header className={className}>
      <span className="header__logo"> Escape.</span>
      <NavigatePanel listOfNavEl={headerItems} />
    </header>
  );
};

export default Header;

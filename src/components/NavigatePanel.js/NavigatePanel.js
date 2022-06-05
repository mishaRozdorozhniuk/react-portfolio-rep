import React from 'react';

const NavigatePanel = ({ listOfNavEl }) => {
  return (
    <ul className="header__list">
      {/* на каждую итерацию создается li с текстом из массива */}
      {listOfNavEl.map((el) => (
        <li className="header__item" key={el}>
          {el}
        </li>
      ))}
    </ul>
  );
};

export default NavigatePanel;

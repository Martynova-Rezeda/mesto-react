import React from 'react';

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <button
        type="button"
        aria-label="Корзина"
        className="element__button-delete"
      ></button>
      <img
        src={card.link}
        alt={card.name}
        className="element__image"
        onClick={handleCardClick}
      />
      <div className="element__wrapper">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-wrapper">
          <button
            type="button"
            aria-label="Лайк"
            className="element__button-like"
          ></button>
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
export default Card;

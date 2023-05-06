import React from 'react';

function ImagePopup({ card, onClose }) {
  console.log(card);

  return (
    <div
      className={
        card !== null ? 'popup popup-card popup_opened' : 'popup popup-card'
      }
    >
      <div className="popup__container popup__container-card">
        <button
          className="popup__button-close popup__button-close-card"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img
          className="popup__card-image"
          src={card !== null ? card.link : '#'}
          alt={card !== null ? card.name : '#'}
        />
        <h2 className="popup__card-title">{card !== null ? card.name : '#'}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;

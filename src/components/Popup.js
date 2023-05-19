import React from 'react';

function Popup({ isOpen, onClose, children, name }) {
  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__${(name = 'card' ? 'container-card' : '')}`}>
        <button
          className="popup__button-close popup__button-close-card"
          type="button"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}
export default Popup;

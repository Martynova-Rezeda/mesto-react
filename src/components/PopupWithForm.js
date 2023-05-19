import React from 'react';

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__button-close popup__button-close-edit"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__content popup__content-edit"
          action="#"
          method="post"
          name={props.name}
          onSubmit={props.onSubmit}
        >
          {props.children}
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;

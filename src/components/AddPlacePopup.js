import React from 'react';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, onLoading }) {
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangePicture(e) {
    setPicture(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: title,
      link: picture,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-form"
      named="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__chapter">
        <input
          id="cardname-input"
          className="popup__field popup__field_type_cardname"
          name="name"
          type="text"
          placeholder="Название"
          required
          onChange={handleChangeTitle}
        />
        <span className="cardname-input-error popup__input-error"></span>
      </label>
      <label className="popup__chapter">
        <input
          id="link-input"
          className="popup__field popup__field_type_picturelink"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
          onChange={handleChangePicture}
        />
        <span className="link-input-error popup__input-error"></span>
        <button className="popup__button-save" type="submit">
          {onLoading ? 'Создание...' : 'Создать'}
        </button>
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;

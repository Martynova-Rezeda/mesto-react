import { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-form"
        named="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__chapter">
          <input
            id="name-input"
            className="popup__field popup__field_type_username"
            name="name"
            type="text"
            placeholder="Имя"
            required
          />
          <span className="name-input-error popup__input-error"></span>
        </label>
        <label className="popup__chapter">
          <input
            id="job-input"
            className="popup__field popup__field_type_profession"
            name="job"
            type="text"
            placeholder="О себе"
            required
          />
          <span className="job-input-error popup__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="add-form"
        named="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__chapter">
          <input
            id="cardname-input"
            className="popup__field popup__field_type_cardname"
            name="name"
            type="text"
            placeholder="Название"
            required
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
          />
          <span className="link-input-error popup__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="update-avatar-form"
        named="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__chapter">
          <input
            id="avatar-input"
            className="popup__field popup__field_type_avatarlink"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="avatar-input-error popup__input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm title="Вы уверенны?" name="delete-card" named="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;

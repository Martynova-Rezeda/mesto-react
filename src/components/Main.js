import { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState(null);
  const [userDescription, setUserDescription] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect((data) => {
    api
      .getUserProfile(data)
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Error:${err}`);
      });
  }, []);

  useEffect((obj) => {
    api
      .getInitialCards(obj)
      .then((obj) => {
        setCards(obj);
      })
      .catch((err) => {
        console.log(`Error:${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <img className="profile__avatar" src={userAvatar} alt="Ваше фото" />
          <button
            type="button"
            aria-label="Сменить аватар"
            className="profile__avatar-button-edit"
            onClick={onEditAvatar}
          ></button>
          <div className="profile__info-card">
            <div className="profile__info-text">
              <h1 className="profile__info-title">{userName}</h1>
              <button
                type="button"
                aria-label="Редактировать"
                className="profile__button-edit"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__info-subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Добавить"
          className="profile__button-add"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              id={card._id}
              card={card}
              onCardClick={onCardClick}
            />
          );
        })}
      </section>
    </main>
  );
}
export default Main;

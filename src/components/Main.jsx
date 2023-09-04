import React from 'react';
import '../index.css'
import profileAvatar from '../image/cousteau.jpg';

export default function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    // function handleEditAvatarClick() {
    //         const popupWithAvatar = document.querySelector('.popup_type_update-avatar');
    //         popupWithAvatar.classList.add('popup_opened');
        
    // }
    // function handleEditProfileClick() {
       
    //         const popupWithProfile = document.querySelector('.popup_type_edit-profile');
    //         popupWithProfile.classList.add('popup_opened');
      
    // }
    // function handleAddPlaceClick() {
    //                 const popupWithProfile = document.querySelector('.popup_type_new-card');
    //         popupWithProfile.classList.add('popup_opened');
        
    // }

    return (
    <main className="container">
            <section className="profile">
                <div className="profile__items">
                    <div className="profile__avatar">
                        <img className="profile__img-avatar" src={profileAvatar} alt="Аватар автора"/>
                        <button type="button" className="profile__edit-avatar"
                        onClick={onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button type="button" className="profile__edit-button" 
                            onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__caption">Исследователь океана</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button"
                onClick={onAddPlace}></button>

            </section>

            <section className="elements">
                <ul className="elements__items">
                </ul>
            </section>

        </main>
    );
}
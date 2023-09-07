import React from 'react';
import '../index.css'


export default function Main({ onEditProfile, onAddPlace, onEditAvatar, userName, userDescription, userAvatar, children }) {

    return (
        <main className="container">
            <section className="profile">
                <div className="profile__items">
                    <div className="profile__avatar">
                        <img className="profile__img-avatar" src={userAvatar} alt="Аватар автора" />
                        <button type="button" className="profile__edit-avatar"
                            onClick={onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name">{userName}</h1>
                            <button type="button" className="profile__edit-button"
                                onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__caption">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button"
                    onClick={onAddPlace}></button>

            </section>

            <section className="elements">
                <ul className="elements__items">
                    {children}
                </ul>
            </section>

        </main>
    );
}
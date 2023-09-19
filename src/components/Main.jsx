import React, { useContext } from 'react';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext.js';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, children }) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="container">
            <section className="profile">
                <div className="profile__items">
                    <div className="profile__avatar">
                        <img className="profile__img-avatar"
                         src={currentUser.avatar}
                          alt="Аватар автора" />
                        <button type="button" className="profile__edit-avatar"
                            onClick={onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name">
                                {currentUser.name}
                                </h1>
                            <button type="button" className="profile__edit-button"
                                onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__caption">
                            {currentUser.about}
                            </p>
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
import React from 'react'
import '../index.css'

export default function Card({ link, name, likes, onCardClick }) {
    return (
        <li className="card">
            <button type="button" className="card__trash"></button>
            <img className="card__image" src={link} alt={name} onClick={onCardClick} />
            <div className="card__caption">
                <h2 className="card__title">{name}</h2>
                <div className="card__like">
                    <button type="button" className="card__icon" aria-label="Иконка-сердечко"
                        title="Добавить в избранное"></button>
                    <span className="card__like-counter">{likes}</span>
                </div>
            </div>
        </li>
    )
}

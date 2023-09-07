
import React from 'react'
export default function Card({ card, onCardClick }) {

    function handleardClick() {
        onCardClick(card);
      };
    
    return (
        <li className="card">
            <button type="button" className="card__trash"></button>
            <img className="card__image" src={card.link} alt={card.name} onClick={handleardClick} />
            <div className="card__caption">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like">
                    <button type="button" className="card__icon" aria-label="Иконка-сердечко"
                        title="Добавить в избранное"></button>
                    <span className="card__like-counter">{card.likes}</span>
                </div>
            </div>
        </li>
    )
}

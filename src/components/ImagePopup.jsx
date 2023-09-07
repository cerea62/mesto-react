import React from 'react'
import '../index.css'

export default function ImagePopup({ selectedCard, onClose }) {
  const popupOpened = `${selectedCard ? 'popup_opened' : ' '}`;
  const srcImage = selectedCard.src;
  const altImage = selectedCard.alt;
  return (
    <div className={`popup popup_type_image ${popupOpened}`}>
      <div className="popup__img">
        <button type="button" className="popup__close popup__close_type_image" onClick={onClose}></button>
        <figure>
          <img className="popup__image" src={srcImage} alt={altImage} />
          <figcaption className="popup__image-caption">{altImage}</figcaption>
        </figure>
      </div>
    </div>
  )
}

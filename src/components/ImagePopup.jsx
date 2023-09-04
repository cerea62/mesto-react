import React from 'react'
import '../index.css'

export default function ImagePopup() {
  return (
    <div className="popup popup_type_image">
    <div className="popup__img">
        <button type="button" className="popup__close popup__close_type_image"></button>
        <figure>
            <img className="popup__image" src="#" alt="#" />
            <figcaption className="popup__image-caption"></figcaption>
        </figure>
    </div>
</div>
  )
}

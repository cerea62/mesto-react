import React from 'react'
import '../index.css'

export default function PopupWithForm({ name, title, children, isActive, onClose, onSubmit }) {
  const popupOpened = `${isActive ? 'popup_opened' : ' '}`;
  return  (
    <div className={`popup popup_type_${name} ${popupOpened}`}>
      <div className="popup__container">
        <button type="button"
        className="popup__close"
        onClick={onClose}></button>
        <h2 className="popup__title">{`${title}`}</h2>
        <form
          className={`form form_type_${name}`}
          name="form-popup"
          onSubmit={onSubmit}
          // novalidate 
          />
        {children}
      </div>
    </div>
  ) 
}

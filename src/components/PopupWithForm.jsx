import React from 'react'
import '../index.css'

export default function PopupWithForm({ name, title, children, isActive, onClick, onSubmit }) {
  const popupOpened = `switch ${isActive ? 'popup_opened' : null}`;
  console.log(popupOpened);
  return  (
    <div className={`popup popup_type_${name} ${popupOpened}`}>
      <div className="popup__container">
        <button type="button"
        className="popup__close"
        onClick={onClick}></button>
        <h2 className="popup__title">{`${title}`}</h2>
        <form
          className={`form form_type_${name}`}
          name="form-popup"
          onSubmit={onSubmit}
          novalidate />
        {children}
      </div>
    </div>
  ) 
}

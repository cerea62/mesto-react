import React from 'react'

export default function PopupWithForm({ name, title, button, children, isActive, onClose, onSubmit }) {
  const popupOpened = `${isActive ? 'popup_opened' : ' '}`;
  return (
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
        />
        {children}
        <button
          type="submit"
          className="form__button-save"> {button}
        </button>

      </div>
    </div>
  )
}

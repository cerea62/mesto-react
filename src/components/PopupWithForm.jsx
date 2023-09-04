import React from 'react'
import '../index.css'

export default function PopupWithForm({ name, title, children, isActive, onSubmit }) {
  return isActive ? (
    <div className={`popup popup_type_${name} popup_opened`}>
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h2 className="popup__title">{`${title}`}</h2>
        <form
          className={`form form_type_${name}`}
          name="form-popup"
          onSubmit={onSubmit}
          novalidate />
        {children}
      </div>
    </div>
  ) : null
}

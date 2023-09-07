import React from 'react'

export default function Input({type, placeholder, name, id, className, children, onChange, value}) {
    return (
        <>
            <input type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                className={`form__field form__field_${className}`}
                src={children}
                onChange ={onChange}
                value={value}
                // minlength="2"
                // maxlength="30"
                required />
            <span id={`${id}-error`} className="form__error"></span>
        </>
    )
}

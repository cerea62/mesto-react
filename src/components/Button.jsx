import React from 'react'

export default function Button({ type, text}) {
    return (
        <button
            type={type}
            className="form__button-save"> {text}
        </button>
    )
}

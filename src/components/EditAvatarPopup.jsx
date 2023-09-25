import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import Input from './Input';


export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const InputRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: InputRef.current.value
        });
        e.target.reset();

    }
    return (
        <PopupWithForm
            title="Обновить аватар"
            name="update-avatar"
            isOpen={isOpen}
            onClose={onClose}
            button="Да"
            onSubmit={handleSubmit}
        >
            <Input
                ref={InputRef}
                type="url"
                placeholder="Ссылка на новый аватар"
                name="avatar"
                id="avatar"
                className="type_avatar"
                children=" "
            />

        </PopupWithForm>
    )
}

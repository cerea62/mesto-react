import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import Input from './Input';


export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const InputRef = useRef();
    function handleSubmit(e) {
        debugger
        e.preventDefault();
        // console.log(avatarRef.current.lastChild[0].value);
        onUpdateAvatar({
            avatar: InputRef.current.value
        });

    }
    return (
        <PopupWithForm
            // ref={avatarRef} //Попап с редактированием аватара
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

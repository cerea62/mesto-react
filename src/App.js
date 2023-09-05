import './index.css'
import { useEffect, useState } from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import Input from './components/Input';
import Button from './components/Button';
import ImagePopup from './components/ImagePopup';

function App() {

    const [changeInput, setChangeInput] = useState(" ");

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false); 
    const handleEditProfileClick = function () { //открытие попапа Редактирование профиля
        setIsEditProfilePopupOpen(true);
    }

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false); //открытие попапа Редактирование профиля
    const handleAddPlaceClick = function () {
        setIsAddPlacePopupOpen(true);
    }
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false); //открытие попапа Редактирование профиля
    const handleEditAvatarClick = function () {
        setIsEditAvatarPopupOpen(true);
    }

    const handleButtonClosePopup = function() { //закрытие попапа Редактирование профиля
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
    }
    const handleInputChange = function (e) {
        setChangeInput(e.target.value)
    }
    // const handleFormSubmit = function (e) {
    //     e.prevent.default;
    // }
    return (
        <>
            <div className="content">
                <div className="page">
                    <Header />
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick} />
                    <Footer />
                    {/* <template id="card-template">
                        <li className="card">
                            <button type="button" className="card__trash"></button>
                            <img className="card__image" src="#" alt="#" />
                            <div className="card__caption">
                                <h2 className="card__title"></h2>
                                <div className="card__like">
                                    <button type="button" className="card__icon" aria-label="Иконка-сердечко"
                                        title="Добавить в избранное"></button>
                                    <span className="card__like-counter"></span>
                                </div>
                            </div>
                        </li>
                    </template> */}

                    <PopupWithForm //попап редактирования профиля
                        title="Редактировать профиль"
                        name="edit-profile"
                        isActive={isEditProfilePopupOpen}
                        onClick={handleButtonClosePopup}
                        // onClose={handleButtonClosePopup}
                        // onSubmit={handleFormSubmit}
                    >
                        <Input
                            type="text"
                            placeholder="Имя"
                            name="name"
                            id="name"
                            className="type_name"
                            onChange={handleInputChange}
                            value={changeInput}>
                        </Input>

                        <Input
                            type="text"
                            placeholder="О себе"
                            name="about"
                            id="about"
                            className="type_about">
                        </Input>
                        <Button
                            type="submit"
                            text="Сохранить">
                        </Button>
                    </PopupWithForm>

                    <PopupWithForm //попап Новое место
                        title="Новое место"
                        name="new-card"
                        isActive={isAddPlacePopupOpen}
                        onClick={handleButtonClosePopup}
                    >
                        <Input
                            type="text"
                            placeholder="Название"
                            name="name"
                            id="place"
                            className="type_place">
                        </Input>
                        <Input
                            type="url"
                            placeholder="Ссылка на картинку"
                            name="link"
                            id="link"
                            className="type_link"
                            children=" ">
                        </Input>
                        <Button
                            type="submit"
                            text="Сохранить">
                        </Button>

                    </PopupWithForm>

                    <PopupWithForm //Попап с редактированием аватара
                        title="Обновить аватар"
                        name="update-avatar"
                        isActive={isEditAvatarPopupOpen}
                        onClick={handleButtonClosePopup}
                    >
                        <Input
                            type="url"
                            placeholder="Ссылка на новый аватар"
                            name="avatar"
                            id="avatar"
                            className="type_avatar"
                            children=" "></Input>
                        <Button
                            type="submit"
                            text="Да"></Button>
                    </PopupWithForm>
                    <PopupWithForm //попап удаления карточки
                        title="Вы уверены?"
                        name="del-card"
                    >
                        <Button
                            type="submit"
                            text="Да"></Button>
                    </PopupWithForm>
                    <ImagePopup />
                </div>
            </div>
        </>
    );
}

export default App;

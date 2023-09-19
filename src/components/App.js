import { useEffect, useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';

import Card from './Card';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

// const mapCards = (cards) => {
//     return cards.map((item) => ({
//         card: item
//         // key: item._id,
//         // link: item.link,
//         // name: item.name,
//         // likes: item.likes.length,
//         // _id: item._id
//     }));
// };

function App() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        handleGetCards();
    }, []);
    const handleGetCards = function () {
        api.getCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setCurrentUser(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const [selectedCard, setSelectedCard] = useState({});

    const handleCardClick = function (card) {
        setSelectedCard(card);
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLike(card._id, isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
        setCards((state) => state.filter((item) => item !== card))
    })
}

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const handleEditProfileClick = function () { //открытие попапа Редактирование профиля
        setIsEditProfilePopupOpen(true);
    }

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false); //открытие попапа Редактирование профиля
    const handleAddPlaceClick = function () {
        setIsAddPlacePopupOpen(true);
    }
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false); //открытие попапа Редактирование аватара
    const handleEditAvatarClick = function () {
        setIsEditAvatarPopupOpen(true);
    }
    const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
    const handleDeleteCardClick = function () {
        setIsDeleteCardPopupOpen(true);
    }
    const closeAllPopups = function () { //закрытие попапа Редактирование профиля
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(false);
    }

    return (
        <div className="content">
            <div className="page">
                <CurrentUserContext.Provider value={currentUser}>
                    <Header />
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        children=
                        {cards.map((card) => (
                            <Card
                                card={card}
                                key={card._id}
                                name={card.name}
                                link={card.link}
                                likes={card.likes.length}
                                onCardClick={handleCardClick}
                                onLikeClick={handleCardLike}
                                onDeleteCard={handleCardDelete}

                            />
                        ))}
                    />
                    <Footer />

                    <PopupWithForm //попап редактирования профиля
                        title="Редактировать профиль"
                        name="edit-profile"
                        isActive={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        button="Сохранить"
                    >
                        <Input
                            type="text"
                            placeholder="Имя"
                            name="name"
                            id="name"
                            className="type_name"
                        >
                        </Input>
                        <Input
                            type="text"
                            placeholder="О себе"
                            name="about"
                            id="about"
                            className="type_about">
                        </Input>
                    </PopupWithForm>

                    <PopupWithForm //попап Новое место
                        title="Новое место"
                        name="new-card"
                        isActive={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        button="Сохранить"
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
                    </PopupWithForm>

                    <PopupWithForm //Попап с редактированием аватара
                        title="Обновить аватар"
                        name="update-avatar"
                        isActive={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        button="Да"
                    >
                        <Input
                            type="url"
                            placeholder="Ссылка на новый аватар"
                            name="avatar"
                            id="avatar"
                            className="type_avatar"
                            children=" "></Input>
                    </PopupWithForm>
                    <PopupWithForm //попап удаления карточки
                        title="Вы уверены?"
                        name="del-card"
                        isActive={isDeleteCardPopupOpen}
                        onClose={closeAllPopups}
                        button="Да"
                    >
                    </PopupWithForm>
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />
                </CurrentUserContext.Provider>
            </div>
        </div>
    );
}

export default App;

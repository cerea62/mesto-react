import { useEffect, useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import AddPlacePopup from "./AddPlacePopup";

function App() {

    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [selectedCard, setSelectedCard] = useState({});
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([profileData, cardData]) => {
                setCurrentUser(profileData);
                setCards(cardData);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleCardClick = function (card) {
        setSelectedCard(card);
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLike(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((item) => item._id !== card._id))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleUpdateUser(data) {
        api.editUserInfo(data)
            .then((profileData) => {
                setCurrentUser(profileData);
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function handleUpdateAvatar(data) {
        api.editAvatar(data)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function handleAddPlace(card) {
        api.addCard(card)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            });
    }


    //открытие попапа Редактирование профиля
    const handleEditProfileClick = function () {
        setIsEditProfilePopupOpen(true);
    }

    //открытие попапа Редактирование профиля
    const handleAddPlaceClick = function () {
        setIsAddPlacePopupOpen(true);
    }
    //открытие попапа Редактирование аватара
    const handleEditAvatarClick = function () {
        setIsEditAvatarPopupOpen(true);
    }
    //закрытие попапа Редактирование профиля
    const closeAllPopups = function () {
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
                        cards={cards}
                        onCardClick={handleCardClick}
                        onLikeClick={handleCardLike}
                        onDeleteCard={handleCardDelete}
                    />
                    <Footer />

                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser} />

                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlace}
                    />

                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar} />

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

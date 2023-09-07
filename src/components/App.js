import '../index.css'
import { useEffect, useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import Button from './Button';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import profileAvatar from '../image/cousteau.jpg';
import Card from './Card';

const mapCards = (cards) => {
    return cards.map((item) => ({
        key: item._id,
        link: item.link,
        name: item.name,
        likes: item.likes.length
    }));
};

function App() {
    
    const [userName, setUserName] = useState("Жак Ив Кусто");
    const [userDescription, setUserDescription] = useState("Исследователь океана");
    const [userAvatar, setUserAvatar] = useState(profileAvatar);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        handleRequest();
      }, []);
    
      useEffect(() => {
      api
        .getUserInfo().then(res => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        } )
        .catch((err) => {
            console.log(err);
          })
         }, []);

    const handleRequest = function () {
        api.getCards()
        .then((res) => {
            setCards(mapCards(res));
        })
        .catch((err) => {
            console.log(err);
          })
    }
    
    const [selectedCard, setSelectedCard] = useState(false);

    const handleCardClick = function(e) {
        setSelectedCard(e.target);
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
        <>
            <div className="content">
                <div className="page">
                    <Header />
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        userName={userName}
                        userDescription={userDescription}
                        userAvatar={userAvatar}
                        children=                        
                        {cards.map((cardData) => (
                            <Card
                                key={cardData.key}                            
                                link={cardData.link}
                                name={cardData.name}
                                cardData={cardData}
                                likes={cardData.likes}
                                onCardClick={handleCardClick}
                            />)
                            )}
                    />
                    <Footer />

                    <PopupWithForm //попап редактирования профиля
                        title="Редактировать профиль"
                        name="edit-profile"
                        isActive={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
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
                        <Button
                            type="submit"
                            text="Сохранить">
                        </Button>
                    </PopupWithForm>

                    <PopupWithForm //попап Новое место
                        title="Новое место"
                        name="new-card"
                        isActive={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
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
                        onClose={closeAllPopups}
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
                        isActive={isDeleteCardPopupOpen}
                        onClose={closeAllPopups}
                    >
                        <Button
                            type="submit"
                            text="Да"></Button>
                    </PopupWithForm>
                    <ImagePopup
                    selectedCard={selectedCard}
                    onClose={closeAllPopups}
                     />
                </div>
            </div>
        </>
    );
}

export default App;

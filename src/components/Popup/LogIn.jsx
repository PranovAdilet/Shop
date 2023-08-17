import React from 'react';
import {changeStatus, closePopup} from "../../redux/popup";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {GrClose} from 'react-icons/gr'
import axios from "axios";
import {RegisterUser} from "../../redux/user";

const LogIn = () => {
    const {status} = useSelector(s => s.reducer.popup)

    const dispatch = useDispatch()

    const {
        register,
        reset,
        handleSubmit,
        formState : {
            errors
        }
    } = useForm()
    const signInHandler = (data) => {
        axios.post('http://localhost:8080/login', data).then((res) => {
            dispatch(RegisterUser(res.data.user))
            reset()
            dispatch(closePopup())
        }).catch(err => alert(err))
    }
    return (
        <div className={`popup popup1 ${status === "login" && "popup1_active"}`}>
            <form onSubmit={handleSubmit(signInHandler)} className="popup__form">
                <h3 className="popup__btn-signIn">Вход</h3>
                <label className="popup__label">
                    <p className="popup__text">Логин</p>
                    <input {...register("email")} className="popup__input" type="email"/>
                </label>
                <label className="popup__label">
                    <p className="popup__text">Пароль</p>
                    <input {...register("password")} className="popup__input" type="password"/>
                </label>
                <button type="submit" className="popup__btn">Вход</button>
                <div className="popup__btns">
                    <button type="button" onClick={() => dispatch(changeStatus("registr"))} className="popup__btn-signUp">Регистрация</button>
                    <button className="popup__btn-forget">Забыли пароль?</button>
                </div>
            </form>
            <span onClick={() => dispatch(closePopup())} className="popup__close"><GrClose/></span>
        </div>
    );
};

export default LogIn;
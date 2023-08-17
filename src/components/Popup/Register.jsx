import React from 'react';
import {changeStatus, closePopup} from "../../redux/popup";
import axios from "axios";
import {RegisterUser} from "../../redux/user";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {GrClose} from 'react-icons/gr'

const Register = () => {
    const {active, status} = useSelector(s => s.reducer.popup)
    const user = useSelector(s => s.reducer.user)
    const dispatch = useDispatch()
    const {
        register,
        reset,
        handleSubmit,
        formState : {
            errors
        }
    } = useForm()
    const signUpHandler = (data) => {
        axios.post('http://localhost:8080/register',{
            ...data,
            balance: 5000,
            avatar: '',
            products: [],
        }).then((res) => {
            dispatch(RegisterUser(res.data.user))
            reset()
            dispatch(closePopup())
        }).catch(err => alert(err))
    }
    return (
        <div className={`popup popup2 ${status === "registr" && "popup2_active"}`}>
            <form onSubmit={handleSubmit(signUpHandler)} className="popup__form">
                <h3 className="popup__btn-signIn">Регистрация</h3>
                <label className="popup__label">
                    <p className="popup__text">Логин</p>
                    <input {...register("email")} className="popup__input" type="email"/>
                </label>
                <label className="popup__label">
                    <p className="popup__text">Пароль</p>
                    <input minLength="4" {...register("password")} className="popup__input" type="password"/>
                </label>
                <label className="popup__label">
                    <p className="popup__text">Телефон</p>
                    <input {...register("phone")} className="popup__input" type="tel"/>
                </label>
                <label className="popup__label">
                    <p className="popup__text">Имя</p>
                    <input {...register("name")} className="popup__input" type="text"/>
                </label>
                <button type="submit" className="popup__btn popup__btn-signUp2">Регистрация</button>
                <div className="popup__btns">
                    <button onClick={() => dispatch(changeStatus("login"))} type="button" className="popup__btn-signUp">Войти</button>
                    <button type="button" className="popup__btn-forget">Забыли пароль?</button>
                </div>
            </form>
            <span onClick={() => dispatch(closePopup())} className="popup__close"><GrClose/></span>
        </div>
    );
};

export default Register;
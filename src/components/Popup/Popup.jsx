import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {changeStatus, closePopup} from "../../redux/popup";
import {LogOutUser, RegisterUser} from "../../redux/user";
import {useForm} from "react-hook-form";
import axios from "axios";
import Register from "./Register";
import LogIn from "./LogIn";

const Popup = () => {
    const {active} = useSelector(s => s.reducer.popup)
    const user = useSelector(s => s.reducer.user)
    const dispatch = useDispatch()

    return (
        <div onClick={(e) => {
            if (e.target.classList.contains('overlay')){
                dispatch(closePopup())
            }
        }} style={{display: active ? 'flex' : 'none'}}  className="overlay">
            <LogIn/>
            <Register/>
        </div>
    );
};

export default Popup;
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const popup = createSlice({
    name: "popup",
    initialState:{
        active: false,
        status: "login",
    },
    reducers: {
        openPopup: (state, action) => {
            state.active = true
        },
        closePopup:(state, action) => {
            state.active = false
            state.status = "login"
        },
        changeStatus:(state, action) => {
            state.status = action.payload
        }
    }
})


export default popup.reducer
export const {openPopup, closePopup, changeStatus} = popup.actions
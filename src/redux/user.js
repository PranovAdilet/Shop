import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";



const userReducer = createSlice({
    name: "user",
    initialState:{
        user: {
            email: ""
        }
    },
    reducers: {
        RegisterUser: (state, action) => {
            state.user = action.payload
        },
        LogOutUser: (state) => {
            state.user = {
                email: ""
            }
        },
        BuyProducts:(state, action) => {
            state.user.balance = state.user.balance - action.payload
        }
    }
})


export default userReducer.reducer
export const {RegisterUser, LogOutUser, BuyProducts} = userReducer.actions
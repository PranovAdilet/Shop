import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {act} from "react-dom/test-utils";
import axios from "axios";
import {getAllCards} from "./cards";


export const getOrder = createAsyncThunk(
    'order/getOrder',
    async (user, {rejectWithValue}) => {
        try {
            const res = await axios(`http://localhost:8080/order?user.email=${user}`)
            if (res.status !== 200) {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)




const order = createSlice({


    name: 'order',
    initialState: {
        order: [],
        status:"",
        error: "",
        user: "Pranov@mail.ru"
    },
    reducers: {
        AddOrderProduct: (state, action) => {
            state.order = action.payload
        },
        GetEmailUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [getOrder.pending] : (state, action) => {
            state.status =  'loading'
        },
        [getOrder.fulfilled] : (state, action) => {
            state.status = 'success'
            state.order = action.payload
        },
        [getOrder.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

    }
})
export default order.reducer
export const {AddOrderProduct, GetEmailUser} = order.actions
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getUserOrder = createAsyncThunk(
    'order/getOrder',
    async (_, {rejectWithValue}) => {
        try {
            const res = await axios(`http://localhost:8080/order`)
            if (res.status !== 200) {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)


export const orderProducts = createSlice({
    name: 'orderProduct',
    initialState: {
        status: '',
        orderProduct: {

        },
        error:''
    },
    reducers: {

    },

    extraReducers : {
        [getUserOrder.pending] : (state, action) => {
            state.status =  'loading'
        },
        [getUserOrder.fulfilled] : (state, action) => {
            state.status = 'success'
            state.orderProduct = action.payload
        },
        [getUserOrder.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export default orderProducts.reducer
export const {} = orderProducts.actions
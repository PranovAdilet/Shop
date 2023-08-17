import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (id,{rejectWithValue}) =>{
        try{
            const res = await  axios(`http://localhost:8080/products/${id}`)
            if (res.status !== 200){
                throw new Error('Server error!')
            }
            return res.data
        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)



const product = createSlice({
    name:"product",
    initialState: {
        product:{

        },
        error:'',
        status:""
    },
    reducers:{

    },
    extraReducers:{
        [getProduct.pending] : (state, action) => {
            state.status =  'loading'
        },
        [getProduct.fulfilled] : (state, action) => {
            state.status = 'success'
            state.product = action.payload
        },
        [getProduct.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export default product.reducer

export const {} = product.actions
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCards = createAsyncThunk(
    'cards/getAllCards',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`http://localhost:8080/products?${filter.type.length ? `type=${filter.type}&` : ''}${filter.view.length ? `view=${filter.view}&` : ''}${filter.rating === "asc" ? "_sort=rating&_order=asc&" : filter.rating === "desc" ? "_sort=rating&_order=desc&" : "" }${filter.title === "asc" ? "_sort=title&_order=asc&" : filter.title === "desc" ? "_sort=title&_order=desc&" : "" }&priceCard_gte=${filter.price.from}&priceCard_lte=${filter.price.to}`) //priceCard_gte=${filter.price.from}&priceCard_lte=${filter.price.to}?
            if (res.status !== 200) {
                throw new Error('Server error !')
            }
            return res.data

        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)



export const cards = createSlice({

    name: 'cards',
    initialState: {
        filter: {
            price:{
                from:0,
                to:10000
            },
            priceSale: "",
            name: "",
            rating: "",
            title: "",
            view: "",
            type:""
        },
        cards: [],
        status: '',
        error:''

    },
    reducers: {
        changePriceTo: (state, action)=> {
            state.filter.price = {
                ...state.filter.price,
                to: action.payload
            }
        },
        changePriceFrom: (state, action)=> {
            state.filter.price = {
                ...state.filter.price,
                from: action.payload
            }
        },
        priceSaleProducts: (state, action) =>{
            state.filter.priceSale = action.payload
        },
        filterPopularProducts: (state, action) => {
            state.filter.title = ""
            state.filter.rating = action.payload
        },
        filterTitleProducts: (state, action) => {
            state.filter.rating = ""
            state.filter.title = action.payload
        },
        filterDefaultProducts: (state, action) => {
            state.filter.rating = ""
            state.filter.title = ""
        },
        filterViewProducts: (state, action) => {
            state.filter.view = action.payload
        },
        filterTypeProducts: (state, action) => {
            state.filter.view = ""
            state.filter.type = action.payload
        }
    },
    extraReducers: {
        [getAllCards.pending] : (state, action) => {
            state.status =  'loading'
        },
        [getAllCards.fulfilled] : (state, action) => {
            state.status = 'success'
            state.cards = action.payload
        },
        [getAllCards.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

    }
})


export default cards.reducer

export const {changePriceFrom, changePriceTo, filterDefaultProducts, filterPopularProducts, filterTitleProducts, filterViewProducts, filterTypeProducts} = cards.actions


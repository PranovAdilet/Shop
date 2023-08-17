import {createSlice} from "@reduxjs/toolkit";
import {act} from "react-dom/test-utils";

const basket = createSlice({


    name: 'basket',
    initialState: {
        order: []
    },
    reducers: {

        AddProduct: (state, action) => {
            state.order = [...state.order, action.payload]
        },
        RemoveProduct: (state, action) => {
            state.order = state.order.filter(item => item.id !== action.payload)
        },
        RemoveAllProducts: (state) => {
            state.order = []
        },
        ProductCountPlus : (state, action) => {
            state.order = state.order.map((item) => {
                if (item.id === action.payload){
                    return {...item, count: item.count + 1}
                }
                return item
            })
        },
        ProductCountMinus : (state, action) => {
            state.order = state.order.map((item) => {
                if (item.id === action.payload){
                    return {...item, count: item.count - 1}
                }
                return item
            }).filter(el => el.count !== 0)
        }

    }
})
export default basket.reducer
export const {AddProduct, RemoveProduct, RemoveAllProducts, ProductCountPlus, ProductCountMinus} = basket.actions
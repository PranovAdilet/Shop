import {createSlice} from "@reduxjs/toolkit";

const favorite = createSlice({

    name: 'favorite',
    initialState: {
        products: [],
        filter: {
            rating: "",
            title: "",
            price: {
                to: 10000,
                from: 0
            }
        }

    },
    reducers: {
        AddFavoriteProduct: (state, action) => {
            state.products = [...state.products, action.payload]
        },
        RemoveFavoriteProduct: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        },
        RemoveAllFavoriteProducts: (state) => {
            state.products = []
        },
        filterPopularFavoriteProducts: (state, action) => {
            state.filter.title = ""
            state.filter.rating = action.payload
        },
        filterTitleFavoriteProducts: (state, action) => {
            state.filter.rating = ""
            state.filter.title = action.payload
        },
        filterDefaultFavoriteProducts: (state, action) => {
            state.filter.rating = ""
            state.filter.title = ""
        },
        changeFavoritePriceTo: (state, action)=> {
            state.filter.price = {
                ...state.filter.price,
                to: action.payload
            }
        },
        changeFavoritePriceFrom: (state, action)=> {
            state.filter.price = {
                ...state.filter.price,
                from: action.payload
            }
        }
    }
})
export default favorite.reducer
export const {AddFavoriteProduct, RemoveFavoriteProduct, RemoveAllFavoriteProducts,filterDefaultFavoriteProducts, filterPopularFavoriteProducts, filterTitleFavoriteProducts, changeFavoritePriceFrom, changeFavoritePriceTo} = favorite.actions
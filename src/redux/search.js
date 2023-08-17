import {createSlice} from "@reduxjs/toolkit";

const search = createSlice({

    name: 'search',
    initialState: {
        input:"",
        valueInput:""
    },
    reducers: {
        AddInputText: (state, action)=>{
            state.input = action.payload
        },
        ClearInputText: (state, action) => {
            state.input = ""
        },
        ValueInputText: (state, action)=>{
            state.valueInput = action.payload
        }

    }
})
export default search.reducer
export const {AddInputText, ClearInputText, ValueInputText} = search.actions
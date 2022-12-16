import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import {ITemplate} from '../types'
// import ITemplate from '../types'

interface CartState {
    items:ITemplate[]
    total:number
}

const initialState: CartState = {
    items: [],
    total: 0
}

// create a slice 
export const cartSlice= createSlice({
name:"cart",
initialState,
reducers:{
    removeCart (state, actions:PayloadAction<number>) {
        state.items = state.items.filter(item => item.id !== actions.payload)
    },

    removeAll (state) {
        state.items = [];
    },

    addCart (state,actions:PayloadAction<ITemplate>) {
        state.items.push(actions.payload)
    },

    incrementCart (state, actions:PayloadAction<number>) {
        state.items.map((el:ITemplate) => {
            if(el.id == actions.payload) {
                el.count++
            }
        })
    },

    decrementCart (state, actions:PayloadAction<number>) {
        state.items.map((el) => {
            if(el.id == actions.payload) {
                el.count--
                if(el.count < 1) {
                    state.items = state.items.filter(item => item.id !== actions.payload)
                }
            }
        })
    },

    totalSum (state) {
        state.items.map((el) => {
            state.total += el.price * el. count;
        })
    }
   }
})

// export const getIcon = state => state.icon.icon;
export const {removeCart, removeAll, addCart, incrementCart, decrementCart, totalSum} = cartSlice.actions;
export default cartSlice.reducer;

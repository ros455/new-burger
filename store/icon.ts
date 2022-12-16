import { createSlice } from '@reduxjs/toolkit'

type IconState = {
   icon:string
}

const initialState: IconState = {
   icon:'moon'
}

// create a slice 
export const iconslice= createSlice({
name:"icon",
initialState,
reducers:{
     iconMoon:state=>{
        state.icon= 'moon'
     },
     iconSun:state=>{
        state.icon= 'sun'
    },
   }
})

// export const getIcon = state => state.icon.icon;
export const {iconMoon, iconSun} = iconslice.actions;
export default iconslice.reducer;

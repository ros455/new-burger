import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

interface StyleState {
    sidePanel:string
}

const initialState: StyleState = {
    sidePanel: ''
}

export const styleSlice = createSlice({
name:"style",
initialState,
reducers:{
    setActiceSidePanel (state, actions:PayloadAction<string>) {
        state.sidePanel = actions.payload;
    },
   }
})

export const {setActiceSidePanel} = styleSlice.actions;
export default styleSlice.reducer;

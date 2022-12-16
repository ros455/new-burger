import { configureStore } from '@reduxjs/toolkit'
import iconReducer from './icon'
import cartReducer from './cart'
import styleReducer from './setStyle'

const store= configureStore({
   reducer: {
      icon:iconReducer,
      cart:cartReducer,
      style:styleReducer,
   }
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
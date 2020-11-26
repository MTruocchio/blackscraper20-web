import blackFridaySlice from './BlackFridayStore'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        blackfriday: blackFridaySlice
    }
})
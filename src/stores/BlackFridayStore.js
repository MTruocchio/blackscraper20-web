import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import api from '../services/api'


export const getBlackFridayItems = createAsyncThunk("blackFriday/getItems",
    async () => {
        var response = await api.get('pesquisas')
        return response.data.data
    }
)

const blackFridaySlice = createSlice({
    name: 'blackFridayItems',
    initialState: {items:[]},
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [getBlackFridayItems.fulfilled]: (state, action) => {
          state.items = action.payload
        }
      }
})

export default blackFridaySlice.reducer

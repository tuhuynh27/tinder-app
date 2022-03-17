import { createSlice } from '@reduxjs/toolkit'

export const matchedSlice = createSlice({
  name: 'matched',
  initialState: {
    listMatched: [],
    listLiked: [],
  },
  reducers: {
    addMatched: (state, action) => {
      const newMatched = action.payload
      state.listMatched.unshift(newMatched)
    },
    addLiked: (state, action) => {
      const newLiked = action.payload
      state.listLiked.unshift(newLiked)
    }
  }
})

export const { addMatched, addLiked } = matchedSlice.actions

export const selectListMatched = state => state.matched.listMatched
export const selectListLiked = state => state.matched.listLiked

export default matchedSlice.reducer

import { configureStore } from '@reduxjs/toolkit'

import matchReducer from 'modules/app/explorer/redux/matchedSlice'

export default configureStore({
  reducer: {
    matched: matchReducer,
  }
})

import { configureStore } from '@reduxjs/toolkit'

import matchReducer from 'modules/redux/matchedSlice'
import authenReducer from 'modules/redux/authenSlice'

export default configureStore({
  reducer: {
    matched: matchReducer,
    authen: authenReducer,
  }
})

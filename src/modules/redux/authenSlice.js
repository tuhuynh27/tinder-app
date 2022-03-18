import { createSlice } from '@reduxjs/toolkit'

function save(obj) {
  localStorage.setItem('authen', JSON.stringify(obj))
}

function parse() {
  const authen = localStorage.getItem('authen')
  if (authen) {
    return JSON.parse(authen)
  }
  return null
}

const got = parse() || {}

export const authenSlice = createSlice({
  name: 'authen',
  initialState: {
    isAuthenticated: !!got.email,
    name: got.name || '',
    email: got.email || '',
    image: got.image || '',
  },
  reducers: {
    doLogin: (state, action) => {
      let { name, email, image } = action.payload
      image = image.split('=')[0]
      state.name = name
      state.email = email
      state.image = image
      state.isAuthenticated = true
      save({ name, email, image })
    },
    doLoginTest: (state, action) => {
      state.name = 'Test'
      state.email = 'test@tinder.fuhcm.com'
      state.image = 'https://ca.slack-edge.com/T0GCQ370X-USZH19XRQ-48946bdcb330-512'
      state.isAuthenticated = true
    },
    doLogout: (state, action) => {
      state.name = ''
      state.email = ''
      state.image = ''
      state.isAuthenticated = false
      save(null)
    },
  }
})

export const { doLogin, doLogout, doLoginTest } = authenSlice.actions

export const selectIsAuthenticated = state => state.authen.isAuthenticated

export const selectAuthenProfile = state => ({
  name: state.authen.name,
  email: state.authen.email,
  image: state.authen.image,
})

export default authenSlice.reducer

import React, { useState, useEffect } from 'react'
import './LandingPage.scss'
import { useNavigate } from 'react-router-dom'

import LogoWhite from 'assets/img/logo_white.png'
import LoginPopup from './login-popup/LoginPopup'

import { useDispatch, useSelector } from 'react-redux'
import { doLogin, doLoginTest, selectIsAuthenticated } from 'modules/redux/authenSlice'

function LandingPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(selectIsAuthenticated)

  const [loginPopup, setLoginPopup] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/app')
    }
  }, [isAuthenticated, navigate])

  function login(data) {
    dispatch(doLogin(data))
    setLoginPopup(false)
    navigate('/app')
  }

  function loginTest() {
    dispatch(doLoginTest())
    setLoginPopup(false)
    navigate('/app')
  }

  return (
    <div className="landing-page">
      <img className="logo" src={LogoWhite} rel="noreferrer" alt="Logo" />
      <div className="buttons" onClick={() => setLoginPopup(true)}>
        <button>Create account</button>
        <button className="login">Log in</button>
      </div>
      <div className="bottom">
        <p>
          Only students with email @fpt.edu.vn can log in
        </p>
        <p>
          Developed by <a href="https://tuhuynh.com" target="_blank" rel="noreferrer">Tu Huynh</a> &copy; 2022 @ fuhcm.com
        </p>
      </div>
      {loginPopup && <LoginPopup
        onClose={() => setLoginPopup(false)}
        onLogin={(data) => login(data)}
        onLoginTest={() => loginTest()}
      />}
    </div>
  )
}
export default LandingPage

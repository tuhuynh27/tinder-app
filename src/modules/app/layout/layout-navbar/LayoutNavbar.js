import React from 'react'
import './LayoutNavbar.scss'

import { Link, useNavigate } from 'react-router-dom'

import Logo from 'assets/img/logo.png'

import { useDispatch, useSelector } from 'react-redux'
import { doLogout, selectAuthenProfile } from 'modules/redux/authenSlice'

function LayoutNavbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authen = useSelector(selectAuthenProfile)

  function logout() {
    dispatch(doLogout())
    navigate('/')
  }

  return (
    <div className="layout-navbar">
      <div className="profile" onClick={() => logout()} style={{ backgroundImage: `url('${authen.image}')` }}/>
      <Link to="/"><img src={Logo} alt="Tinder Logo" /></Link>
    </div>
  )
}

export default LayoutNavbar

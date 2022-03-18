import React from 'react'
import './LayoutNavbar.scss'

import { Link } from 'react-router-dom'

import Logo from 'assets/img/logo.png'

import { useSelector } from 'react-redux'
import { selectAuthenProfile } from 'modules/redux/authenSlice'

function LayoutNavbar({ onClickProfile }) {
  const authen = useSelector(selectAuthenProfile)

  return (
    <div className="layout-navbar">
      <div className="profile" onClick={() => onClickProfile()} style={{ backgroundImage: `url('${authen.image}')` }}/>
      <Link to="/"><img src={Logo} alt="Tinder Logo" /></Link>
    </div>
  )
}

export default LayoutNavbar

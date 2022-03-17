import React from 'react'
import './LayoutNavbar.scss'

import { Link } from 'react-router-dom'

import Logo from 'assets/img/logo.png'

function LayoutNavbar() {
  return (
    <div className="layout-navbar">
      <div className="profile"/>
      <Link to="/"><img src={Logo} alt="Tinder Logo" /></Link>
    </div>
  )
}

export default LayoutNavbar

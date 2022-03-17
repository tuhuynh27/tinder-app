import React from 'react'
import { Link } from 'react-router-dom'

import Logo from 'assets/img/logo.png'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="profile"/>
      <Link to="/"><img src={Logo} alt="Tinder Logo" /></Link>
    </div>
  )
}

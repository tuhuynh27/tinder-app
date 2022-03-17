import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="profile"/>
      <Link to="/"><img src="/logo.png" alt="Tinder Logo" /></Link>
    </div>
  )
}

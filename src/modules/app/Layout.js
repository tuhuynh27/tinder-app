import React from 'react'
import './Layout.scss'

import { use100vh } from 'react-div-100vh'
import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'
import LayoutBottom from './components/LayoutBottom'
import Loading from './Loading'

export default function Layout() {
  const height100vh = use100vh()

  return (
    <React.Fragment>
      <div className="app-layout">
        <Navbar/>
        <div className="outlet-container" style={{ height: `calc(${height100vh ? height100vh + 'px' : '100vh'} - 48px - 48px)` }}>
          <Outlet />
        </div>
        <LayoutBottom/>
      </div>
      <Loading/>
    </React.Fragment>
  )
}

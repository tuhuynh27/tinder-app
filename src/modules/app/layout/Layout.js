import React from 'react'
import './Layout.scss'

import { use100vh } from 'react-div-100vh'
import { Outlet } from 'react-router-dom'

import LayoutNavbar from './layout-navbar/LayoutNavbar'
import LayoutBottom from './layout-bottom/LayoutBottom'
import Loading from './loading/Loading'
import ProfilePopup from './profile-popup/ProfilePopup'

function Layout() {
  const height100vh = use100vh()

  return (
    <React.Fragment>
      <div className="app-layout">
        <LayoutNavbar/>
        <div className="outlet-container" style={{ height: `calc(${height100vh ? height100vh + 'px' : '100vh'} - 48px - 48px)` }}>
          <Outlet />
        </div>
        <LayoutBottom/>
      </div>
      <Loading/>
      <ProfilePopup/>
    </React.Fragment>
  )
}

export default Layout

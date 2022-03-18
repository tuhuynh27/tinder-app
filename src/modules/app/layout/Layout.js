import React, { useEffect } from 'react'
import './Layout.scss'

import { useState } from 'react'
import { use100vh } from 'react-div-100vh'
import { Outlet, useNavigate } from 'react-router-dom'

import LayoutNavbar from './layout-navbar/LayoutNavbar'
import LayoutBottom from './layout-bottom/LayoutBottom'
import Loading from './loading/Loading'
import ProfilePopup from './profile-popup/ProfilePopup'
import AccountBar from './account-bar/AccountBar'

import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from 'modules/redux/authenSlice'

import { CSSTransition } from 'react-transition-group'

function Layout() {
  const height100vh = use100vh()
  const navigate = useNavigate()
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const [isAccountBarOpen, setIsAccountBarOpen] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <React.Fragment>
      <div className="app-layout">
        <LayoutNavbar onClickProfile={() => setIsAccountBarOpen(true)}/>
        <div className="outlet-container" style={{ height: `calc(${height100vh ? height100vh + 'px' : '100vh'} - 48px - 48px)` }}>
          <Outlet />
        </div>
        <LayoutBottom/>
      </div>
      <Loading/>
      <ProfilePopup/>

      <CSSTransition
        in={isAccountBarOpen}
        timeout={500}
        classNames="account-bar-anim"
        unmountOnExit
      >
        <AccountBar onClose={() => setIsAccountBarOpen(false)}/>
      </CSSTransition>
    </React.Fragment>
  )
}

export default Layout

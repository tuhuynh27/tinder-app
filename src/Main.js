import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import LandingPage from './modules/landingpage/LandingPage'
import Explorer from './modules/app/explorer/Explorer'
import MyLikes from './modules/app/mylikes/MyLikes'
import NotFound from './modules/app/notfound/NotFound'
import Layout from './modules/app/layout/Layout'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/app" element={<Layout/>}>
          <Route index element={<Explorer />}/>
          <Route path="my-likes" element={<MyLikes />}/>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main

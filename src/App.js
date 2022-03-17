import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import LandingPage from './LandingPage'
import Explore from './Explore'
import MyLikes from './MyLikes'
import NotFound from './NotFound'
import Layout from './Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/app" element={<Layout/>}>
          <Route index element={<Explore />}/>
          <Route path="my-likes" element={<MyLikes />}/>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

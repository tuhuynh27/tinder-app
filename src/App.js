import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { use100vh } from 'react-div-100vh'

import Navbar from './components/Navbar'
import Bottom from './components/Bottom'
import Explore from './Explore'
import MyLikes from './MyLikes'
import NotFound from './NotFound'

function App() {
  const height100vh = use100vh()

  return (
    <BrowserRouter>
      <div className="main">
        <Navbar/>
        <div className="photo-container" style={{ height: `calc(${height100vh ? height100vh + 'px' : '100vh'} - 48px - 48px)` }}>
          <Routes>
            <Route exact path="/">
              <Route path="/" element={<Explore />}/>
              <Route path="/my-likes" element={<MyLikes />}/>
              <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>
        </div>
        <Bottom/>
      </div>
    </BrowserRouter>
  )
}

export default App

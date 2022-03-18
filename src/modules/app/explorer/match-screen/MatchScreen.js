import React, { useState, useEffect, useRef } from 'react'
import './MatchScreen.scss'

import PubSub from 'pubsub-js'

import { CSSTransition } from 'react-transition-group'

import MatchImg from 'assets/img/match.png'

const queue = []

function MatchScreen() {
  const [isOpen, setIsOpen] = useState(false)
  const [pulse, setPulse] = useState(true)
  const isOpenRef = useRef(false)
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    PubSub.subscribe('match', (_, { name, image }) => {
      if (isOpenRef.current === true) {
        queue.push({ name, image })
      } else {
        openMatch({ name, image })
      }
    })
  }, [])

  useEffect(() => {
    function keyMapping(e) {
      switch (e.keyCode) {
        case 27:
          close()
          break
        default:
          break
      }
    }
    document.addEventListener('keydown', keyMapping)
    return () => {
      document.removeEventListener('keydown', keyMapping)
    }
  }, [])

  function openMatch({ name, image }) {
    setIsOpen(true)
    isOpenRef.current = true
    setName(name)
    setImage(image)
  }

  function close() {
    setIsOpen(false)
    isOpenRef.current = false
    if (queue.length > 0) {
      // Todo: resolve this queue
      queue.shift()
    }
  }

  function doPulse() {
    setPulse(false)
    setTimeout(() => {
      setPulse(true)
    }, 10)
  }

  return (
    <CSSTransition
      in={isOpen}
      timeout={500}
      classNames="match-screen-anim"
      unmountOnExit
    >
      <div className="match-screen" onClick={() => doPulse()} style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,1)), url('${image}')` }}>
        <div className="close" onClick={() => close()}>
          <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="20px" height="20px"
               className="Sq(24px) P(4px)">
            <path className=""
                  d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"/>
          </svg>
        </div>
        {pulse && <img src={MatchImg} alt="Match"/>}
        <p>{name} likes you too!</p>
      </div>
    </CSSTransition>
  )
}

export default React.memo(MatchScreen)

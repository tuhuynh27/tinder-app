import React, { useState, useEffect } from 'react'

import PubSub from 'pubsub-js'

export default function Match() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    PubSub.subscribe('match', (_, { name, image }) => {
      setIsOpen(true)
      setName(name)
      setImage(image)
    })
  }, [])

  return (
    <React.Fragment>
      {isOpen && <div className="match-screen" onClick={() => setIsOpen(false)}
                      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url('${image}')` }}>
        <div className="close">
          <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="20px" height="20px"
               className="Sq(24px) P(4px)">
            <path className=""
                  d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"/>
          </svg>
        </div>
        <img src="./match.png" alt="Match"/>
        <p>{name} cũng thích bạn!</p>
      </div>}
    </React.Fragment>
  )
}

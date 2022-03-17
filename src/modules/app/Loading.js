import React, { useEffect, useState } from 'react'
import './Loading.scss'

import LogoWhite from 'assets/img/logo_white.png'

export default function Loading() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <React.Fragment>
      {loading && (
        <div className="load-screen">
          <img src={LogoWhite} alt="Loading" />
        </div>
      )}
    </React.Fragment>
  )
}

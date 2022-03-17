import React, { useEffect, useState } from 'react'

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
          <img src="/logo_white.png" alt="Loading" />
        </div>
      )}
    </React.Fragment>
  )
}

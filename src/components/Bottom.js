import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Bottom() {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (pathname === '/app') {
      setSelected(0)
    } else if (pathname === '/app/my-likes') {
      setSelected(1)
    } else if (pathname === '/app/matches') {
      setSelected(2)
    }
  }, [pathname])

  function select(index) {
    setSelected(index)
    switch(index) {
      case 0:
        navigate('/app')
        break
      case 1:
        navigate('/app/my-likes')
        break
      case 2:
        navigate('/app/matches')
        break
      default:
        break
    }
  }

  return (
    <div className="bottom">
      <div className={selected === 0 ? 'active' : 'none'} onClick={() => select(0)}>
        <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="28px" height="28px"
             className="Sq(28px) navbarActive_C($c-pink) C($c-ds-gray-50) Trsdu($fast)">
          <path
            d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z"
            fill="" fillRule="nonzero"/>
        </svg>
      </div>
      <div className={selected === 1 ? 'active' : 'none'} onClick={() => select(1)}>
        <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="28px" height="28px"
             className="Sq(32px) C($c-ds-gray-50) Trsdu($fast)">
          <path
            d="M11.999 2C11.999 7.001 17 12 22 12c-5.001 0-10 5.382-10 10 0-4.618-5.027-10-10-10 4.974 0 9.999-4.999 9.999-10z"
            fill=""/>
        </svg>
      </div>
      <div className={selected === 2 ? 'active' : 'none'} onClick={() => select(2)}>
        <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="28px" height="28px"
             className="Sq(28px) navbarActive_C($c-pink) C($c-ds-gray-50) Trsdu($fast)">
          <path
            d="M11.612 16.143c0-2.821 2.627-5.213 5.97-5.213.776 0 1.552.184 2.269.43 0-4.048-4-7.36-8.836-7.36C6.06 4 2 7.434 2 11.543c0 2.637 1.672 5.09 4.18 6.317v2.76c0 .307.238.49.596.307l3.582-1.84h.896c.418 0 .836 0 1.194-.123-.597-.859-.836-1.84-.836-2.821zm5.97-3.68c-2.507 0-4.537 1.595-4.537 3.68s2.03 3.802 4.477 3.802h.299l.597.246.955.613c.299 0 .597 0 .597-.368v-1.104c1.194-.613 2.03-1.84 2.03-3.189 0-2.085-1.97-3.68-4.478-3.68h.06z"/>
        </svg>
      </div>
    </div>
  )
}

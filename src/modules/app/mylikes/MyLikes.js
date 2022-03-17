import { useState } from 'react'
import './MyLikes.scss'

import { use100vh } from 'react-div-100vh'

import { useSelector } from 'react-redux'
import { selectListMatched, selectListLiked } from 'modules/app/explorer/redux/matchedSlice'

function MyLikes() {
  const height100vh = use100vh()

  const [selected, setSelected] = useState(0)

  const listMatched = useSelector(selectListMatched)
  const listLiked = useSelector(selectListLiked)

  const list = selected === 0 ? listMatched : listLiked

  return (
    <div className="mylikes-page">
      <div className="sticky-tab">
        <div className={selected === 0 ? 'active' : 'none'} onClick={() => setSelected(0)}>Matches</div>
        <div className={selected === 1 ? 'active' : 'none'} onClick={() => setSelected(1)}>Likes Sent</div>
      </div>

      {(list.length > 0) &&
        <div className="matches-table" style={{ height: `calc(${height100vh ? height100vh + 'px' : '100vh'} - 35px - 48px - 60px)` }}>
          {list.map(e => (
            <div className="profile-card"
                 key={e.id}
                 style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1)), url('${e.image}')` }}>
              <div className="info">
                <div><span>{e.name}</span>,&nbsp;
                  <span>{e.age}</span></div>
                <div>0h ago</div>
              </div>
            </div>
          ))}
        </div>}

      {list.length === 0 &&
        <div className="no-match-msg" style={{ height: `calc(${height100vh ? height100vh + 'px' : '100vh'} - 35px - 48px - 60px)` }}>
          <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="60px" height="60px"
               className="Sq(60px)">
            <path
              d="M2.16 7.354h6.37a5.947 5.947 0 00-.894 2.084H2.16c-.406.04-.8-.15-1.015-.49a1.04 1.04 0 010-1.114c.215-.341.61-.532 1.015-.491v.01zm1.68 6.263c-.406.04-.8-.15-1.015-.49a1.04 1.04 0 010-1.114c.215-.34.61-.531 1.015-.49h3.796c.077.375.186.751.35 1.106l.021.043.022.043.546.902H3.84zm2.476 4.18c-.59 0-1.069-.472-1.069-1.053 0-.582.479-1.053 1.07-1.053h3.49l1.266 2.106H6.316zm13.746-1.837l-6.36 2.89a.495.495 0 01-.611-.183l-3.971-6.5a4.132 4.132 0 01-.185-3.02C9.556 7.183 11.127 6 12.949 6c.404 0 .818.064 1.233.183 1.222.365 1.745.999 2.476 2.299a5.271 5.271 0 012.346-.73c.327 0 .665.064 1.047.171 2.29.677 3.382 2.901 2.618 5.297a4.287 4.287 0 01-1.909 2.396l-.153.086-.152.075-.393.183z"
              fill="#d4d8de"/>
          </svg>
          <p>Your {selected === 0 ? 'matched' : 'liked'} will be displayed here</p>
        </div>}
    </div>
  )
}

export default MyLikes

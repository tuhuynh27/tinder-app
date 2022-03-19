import React, { useState } from 'react'
import './Matches.scss'

import { useSelector } from 'react-redux'
import { selectListMatched } from 'modules/redux/matchedSlice'
import Messages from './messages/Messages'

import FUHCM from 'assets/img/fuhcm.jpg'

const developer = {
  name: 'Developer',
  image: 'https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/101371426_135019584843048_7604403132482404835_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=19026a&_nc_ohc=n9ektgA1V-kAX_k25g7&_nc_oc=AQmOprl-iQBVk2LCcBXko2qB4HELmEdf9ifNoSSTvyjeubswo0f5zkPBqULjuOjKQ9g&_nc_ht=scontent-xsp1-3.xx&oh=00_AT_3zVvKSWAAT7BEqu9dZyOEJHZse8e9sJv09xUJRlyejQ&oe=6258D7F2',
  bio: 'I created this app',
  age: 'K11'
}

function Matches() {
  const listMatched = useSelector(selectListMatched)
  const [isMsgBoxOpen, setIsMsgBoxOpen] = useState(false)
  const [profile, setProfile] = useState({})

  function openChatBox(profile) {
    setProfile(profile)
    setIsMsgBoxOpen(true)
  }

  function closeChatBox() {
    setProfile({})
    setIsMsgBoxOpen(false)
  }

  return (
    <React.Fragment>
      <div className="matches-screen">
        <div className="title">
          New Matches
        </div>
        <div className="matches-list">
          <div className="profile-card">
            <div className="image"
                 style={{ backgroundImage: `url('${FUHCM}')` }}/>
            <div className="name">FUHCM</div>
          </div>
          {listMatched.map(e => (
            <div key={e.id} className="profile-card" onClick={() => openChatBox(e)}>
              <div className="image"
                   style={{ backgroundImage: `url('${e.image}')` }}/>
              <div className="name">{e.name}</div>
            </div>
          ))}
        </div>
        <div className="title">
          Messages
        </div>
        <div className="messages-list">
          <div className="message-item" onClick={() => openChatBox(developer)}>
            <div className="image-wrapper">
              <div className="image" style={{ backgroundImage: `url('${developer.image}')` }}/>
            </div>
            <div className="details">
              <div className="name">Developer</div>
              <div className="last-message">
                Welcome to the app!
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMsgBoxOpen && <Messages profile={profile} onClose={() => closeChatBox()}/>}
    </React.Fragment>
  )
}

export default React.memo(Matches)

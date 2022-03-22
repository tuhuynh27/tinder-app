import React, { useState } from 'react'
import './Matches.scss'

import { useSelector } from 'react-redux'
import { selectListMatched } from 'modules/redux/matchedSlice'
import Messages from './messages/Messages'

const developer = {
  name: 'Developer',
  image: 'https://images-ssl.gotinder.com/61ef52316b3086010020611e/640x800_452ad15a-bfeb-4a3a-a01a-6dd777f83c2b.jpg',
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
          {
            listMatched.length === 0 && Array(4).fill(null).map(() =>
              <div className="profile-card">
                <div className="image"/>
              </div>)
          }
          {listMatched.map(e => (
            <div key={e.id} className="profile-card" onClick={() => openChatBox(e)}>
              <div className="image"
                   style={{ backgroundImage: `url('${e.image}')` }}/>
              <div className="name">{e.name}</div>
            </div>
          ))}
          {
            listMatched.length < 4 && Array(4 - listMatched.length).fill(null).map(() =>
              <div className="profile-card">
                <div className="image"/>
              </div>)
          }
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

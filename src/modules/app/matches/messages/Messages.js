import React, { useState, useEffect, createRef } from 'react'
import './Messages.scss'

import { openProfile } from 'utils/openProfile'

function Messages({ profile, onClose }) {
  const [listMessages, setListMessages] = useState([])
  const [message, setMessage] = useState('')
  const messagesRef = createRef()

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }

  useEffect(scrollToBottom, [messagesRef, listMessages]);

  useEffect(() => {
    if (profile.name === 'Developer') {
      fakeReply('Hi, how can I help you?', 2000)
    }
  }, [profile.name])

  function handleKeyDown(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      sendMsg()
    }
  }

  function sendMsg() {
    if (message.trim() !== '') {
      fakeReply()
      setListMessages(l => [...l, {
        id: Math.random(),
        text: message,
        isMe: true
      }])
      setMessage('')
    }
  }

  function fakeReply(msg, delay) {
    if (!msg) {
      const randomMsg = [
        'Hi',
        'Oh...',
        'Yeah',
        'Sure',
        'Wait...',
        'Okay',
        'Nope',
        'Are you kidding?',
        'I don\'t know'
      ]
      msg = randomMsg[Math.floor(Math.random() * randomMsg.length)]
    }
    if (!delay) {
      delay = Math.random() * (3000 - 1000) + 1000
    }
    setTimeout(() => {
      setListMessages( l => [...l, {
        id: Math.random(),
        text: msg,
        isMe: false
      }])
    }, delay)
  }

  return (
    <div className="messages-page">
      <div className="top-bar">
        <div className="back-button" onClick={() => onClose()}>
          <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px">
            <path className="Fill($c-pink)"
                  fill="#ff4458"
  d="M13.98 20.717a1.79 1.79 0 0 0 2.685 0 1.79 1.79 0 0 0 0-2.684l-7.158-6.62 7.158-6.8a1.79 1.79 0 0 0 0-2.684 1.79 1.79 0 0 0-2.684 0L5.929 9.98a1.79 1.79 0 0 0 0 2.684l8.052 8.052z"/>
          </svg>
        </div>
        <div className="title" onClick={() => openProfile(profile)}>
          <div className="image" style={{ backgroundImage: `url('${profile.image}')` }} />
          <div className="name">
            {profile.name}
          </div>
        </div>
        <div className="option-button">
          <svg focusable="false" aria-hidden="false" role="img" viewBox="0 0 8 24" width="28px" height="28px"
               className="Rotate(90deg)" aria-labelledby="5e18b952d4a8b7fe c74a86a75370a4b3">
            <path fill="#ff4458" fillRule="evenodd"
  d="M.653 3.439C.653 1.606 2.182.12 4.067.12 5.952.12 7.48 1.606 7.48 3.439c0 1.832-1.528 3.318-3.413 3.318-1.885 0-3.414-1.486-3.414-3.318zm0 8.628c0-1.833 1.529-3.319 3.414-3.319 1.885 0 3.413 1.486 3.413 3.319 0 1.832-1.528 3.318-3.413 3.318-1.885 0-3.414-1.486-3.414-3.318zm0 8.628c0-1.833 1.529-3.319 3.414-3.319 1.885 0 3.413 1.486 3.413 3.319s-1.528 3.318-3.413 3.318c-1.885 0-3.414-1.485-3.414-3.318z"/>
            <title id="5e18b952d4a8b7fe">Options</title>
            <desc id="c74a86a75370a4b3">Options</desc>
          </svg>
        </div>
      </div>
      <div className="bottom-bar">
        <textarea rows="1" placeholder="Type a message"
                  onKeyDown={handleKeyDown}
                  value={message} onChange={e => setMessage(e.target.value)}/>
        <div className="send-button">
          <button disabled={message.length === 0} onClick={() => sendMsg()}>Send</button>
        </div>
      </div>
      {listMessages.length === 0 && <div className="no-message" onClick={() => openProfile(profile)}>
        <div className="text">
          <h1>You Matched with <strong>{profile.name}</strong></h1>
          <p>0 hour ago</p>
        </div>
        <div className="image" style={{ backgroundImage: `url('${profile.image}')` }}/>
      </div>}
      {listMessages.length > 0 &&
        <div className="conversation" ref={messagesRef}>
          <ul>
            {listMessages.map(msg => (
              <li key={msg.id} className={msg.isMe ? 'me' : 'him'}>
                {msg.text}
              </li>
            ))}
          </ul>
        </div>}
    </div>
  )
}

export default Messages

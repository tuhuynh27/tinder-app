import './EditInfo.scss'
import ExplorerImage from 'modules/app/explorer/explorer-image/ExplorerImage'
import React, { useState, createRef } from 'react'

import { openProfile } from 'utils/openProfile'

import { convertBase64 } from 'utils/commonFunctions'

function EditInfo({ onClose }) {
  const obj = {
    name: 'Nguyên',
    age: 'K14',
    bio: 'If you don\'t fight for what you want, don\'t cry for what you lost',
    image: 'https://images-ssl.gotinder.com/6225789fca044301007d251f/640x800_bf226470-baec-4ba2-b848-297292d068b1.jpg'
  }

  const [profile, setProfile] = useState(obj)
  const [selected, setSelected] = useState(0)
  const fileUploadInput = createRef()

  async function fileUploadHandler(e) {
    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    setProfile({ ...profile, image: base64 })
  }

  return (
    <div className="edit-info">
      <div className="title">
        <h1>Edit Info</h1>
        <div className="done-button" onClick={() => onClose()}>
          <span>Done</span>
        </div>
      </div>
      <div className="menu">
        <div className={selected === 0 ? 'active' : 'none'} onClick={() => setSelected(0)}>
          <span>Edit</span>
        </div>
        <div className={selected === 1 ? 'active' : 'none'} onClick={() => setSelected(1)}>
          <span>Preview</span>
        </div>
      </div>
      {selected === 0 && <div className="edit-section">
        <div className="current-photo" style={{ backgroundImage: `url('${profile.image}')` }}>
        </div>
        <div className="update-current-photo">
          <p>Hold, drag and drop to reorder your photos</p>
          <input type="file" accept="image/png, image/gif, image/jpeg" hidden ref={fileUploadInput} onChange={fileUploadHandler} />
          <button onClick={() => fileUploadInput.current.click()}>Update Photo</button>
        </div>
        <div className="update-bio">
          <div className="bio-title">Update about (Bio)</div>
          <div className="bio-textarea">
            <textarea value={profile.bio} onChange={e => setProfile({
              ...profile,
              bio: e.target.value
            })}/>
          </div>
          <div className="bio-desc">
            <p>Do not include social media handles or other contact information in your profile.</p>
          </div>
        </div>
      </div>}
      {selected === 1 && <div className="preview-section">
        <ExplorerImage profile={profile} />
        <div className="open-profile-button" onClick={() => openProfile(profile)}>
          <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="28px" height="28px"
               className="Expand">
            <path fill="#fff"
                  d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
          </svg>
        </div>
      </div>}
    </div>
  )
}

export default EditInfo

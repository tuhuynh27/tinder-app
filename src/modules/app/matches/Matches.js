import './Matches.scss'

import { openProfile } from 'utils/openProfile'

import { useSelector } from 'react-redux'
import { selectListMatched } from 'modules/redux/matchedSlice'

function Matches() {
  const listMatched = useSelector(selectListMatched)

  return (
    <div className="matches-screen">
      <div className="title">
        New Matches
      </div>
      <div className="matches-list">
        <div className="profile-card">
          <div className="image"
               style={{ backgroundImage: `url('https://i.chungta.vn/2020/09/07/photo-1-1578027492964533493668-4611-1599472131.jpg')` }}/>
          <div className="name">FUHCM</div>
        </div>
        {listMatched.map(e => (
          <div key={e.id} className="profile-card" onClick={() => openProfile(e)}>
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
        <div className="message-item">
          <div className="image-wrapper">
            <div className="image" style={{ backgroundImage: `url('https://d33wubrfki0l68.cloudfront.net/19e8b1005d45f56e2c10ad30e215298ce50c677e/6f09c/tu-huynh.jpg')` }}/>
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
  )
}

export default Matches

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
               style={{ backgroundImage: `url('https://tinder-static-assets-prod.s3.amazonaws.com/covid/vaccinecenter.png')` }}/>
          <div className="name">Vaccine</div>
        </div>
        {listMatched.map(e => (
          <div className="profile-card" onClick={() => openProfile(e)}>
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
            <div className="name">Vaccine</div>
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
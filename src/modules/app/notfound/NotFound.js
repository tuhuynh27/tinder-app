import './NotFound.scss'
import { useSelector } from 'react-redux'
import { selectAuthenProfile } from '../../redux/authenSlice'

function NotFound() {
  const authen = useSelector(selectAuthenProfile)

  return (
    <div className="notfound-page">
      <div className="profile-outer-ring">
        <div className="profile-image">
          <img alt="Bubble" src={authen.image}/>
        </div>
      </div>
    </div>
  );
}

export default NotFound

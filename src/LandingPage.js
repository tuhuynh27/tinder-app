import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  function login() {
    navigate('/app')
  }

  return (
    <div className="landing-page">
      <img className="logo" src="/logo_white.png" rel="noreferrer" alt="Logo" />
      <div className="buttons" onClick={() => login()}>
        <button>Create account</button>
        <button className="login">Log in</button>
      </div>
      <div className="bottom">
        <p>
         Only students with email @fpt.edu.vn can log in
        </p>

        <p>
          Developed by <a href="https://tuhuynh.com" target="_blank" rel="noreferrer">Tu Huynh</a> &copy; 2022 @ fuhcm.com
        </p>
      </div>
    </div>
  )
}

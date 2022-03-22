import './LoginPopup.scss'

import GoogleLogin from "react-google-login";

import Logo from 'assets/img/logo.png'

function LoginPopup({ onClose, onLogin, onLoginTest }) {
  function responseGoogle(data) {
    if (data.error) return
    if (!data || !data.profileObj.email || !data.accessToken) return

    onLogin({
      name: data.profileObj.givenName,
      email: data.profileObj.email,
      image: data.profileObj.imageUrl,
      accessToken: data.accessToken
    })
  }

  return (
    <div className="login-popup">
      <div className="login-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="login-close-button" onClick={() => onClose()}>
        <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px"
             className="Sq(24px) P(4px)" fill="#d4d8de">
          <path className=""
  d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"/>
        </svg>
      </div>
      <div className="get-started">
        <h1>Get Started</h1>
      </div>
      <div className="warning">
        <p>Please note that only FPT University students with email @fpt.edu.vn can login into this app.</p>
      </div>
      <div className="login-button-groups">
        <GoogleLogin
          clientId="834798810236-ok8culnaru4ml7fanhjni43lr5i709jj.apps.googleusercontent.com"
          render={renderProps => (
            <button onClick={renderProps.onClick}>
              Log In With Google
              <img src="https://tinder.com/static/build/l/cfcb4297ed6f46ca69fb5572946d4096.svg" alt="Google" />
            </button>
          )}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <button onClick={onLoginTest}>
          Use The Test Account
          <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 79 72" width="16px" height="16px"
               className="Va(tt) Sq(16px)--s Sq(24px)--ml ScaleX(-1)">
            <path
  d="M137.5 72C115.685 72 98 86.459 98 104.292c0 17.835 17.685 32.291 39.5 32.291h.918c.013 0 .028-.024.041-.03.59-.014 1.183-.021 1.765-.056l4.573 2.334h.003l9.098 4.645c2.516 1.284 4.575.126 4.575-2.574v-9.251C169.6 125.94 177 115.825 177 104.29 177 86.46 159.315 72 137.5 72"
  transform="translate(-98 -72)" fill="#505965"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default LoginPopup

import { useState } from "react"

import './login.css'

const Login = () => {
  // COMPONENT HOOKS
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // COMPONENT HANDLERS
  const onSubmitHandler = (e, username, password) => {
    e.preventDefault()
    console.log(username, password)
    alert(`Welcome: ${username} , Your Password: ${password}`)
  }

  return (
    <div>

      {/* <form onSubmit={(e) => onSubmitHandler(e, username, password)}> */}

        <input id="username-input" type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} autoComplete='off' />

        <input id="password-input" type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' />

        <button 
          id="login-button" 
          type="submit" 
          disabled={!username || !password}
          onClick={(e) => onSubmitHandler(e, username, password)}
          >Submit</button>

      {/* </form> */}

    </div>
  )
}

export default Login;
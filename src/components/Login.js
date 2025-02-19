import React from 'react'

const Login = ({onLogin }) => {


    const handleSumbit = (e) => {
        e.preventDefault();
        onLogin();
    }


  return (
    <div>
        <h1> Parent Component </h1>
        <form onSubmit={handleSumbit}>
            <label for="username"> Username: </label>
            <input type="text" id="username" placeholder='username' />
            <label for="password"> Password: </label>
            <input type="password" id="password" placeholder='Password' />
            <button type="submit"> sumbit </button>
        </form>
    </div>
  )
}

export default Login
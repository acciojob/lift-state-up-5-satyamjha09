import React, { useState } from 'react'
import Login from './Login';
import "../styles/App.css"

const App = () => {


  const [isLogin, setIsLogin] = useState(false);


  const handleSumbit = () => {
    setIsLogin(true);
  }


  return (
    <div>

      {isLogin ? (
        <div> Welcome , to Our website </div>
      ) : (
        <Login onLogin={handleSumbit} />
      )}


    </div>
  )
}

export default App
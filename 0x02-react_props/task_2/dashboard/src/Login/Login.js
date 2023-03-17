import React from 'react';
import "./Login.css";

function Login() {
  return (
    <>
      <div className='login'>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password"></input>
          <button>Ok</button>
        </form>
      </div>
    </>
  );
}

export default Login;
import React from 'react';
import Header from "../Header/Header.js";
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from "../Notifications/Notifications.js";
import './App.css'

function App() {
  return (
    <>
    <Notifications/>
      <div className="App-header">
        <Header/>
      </div>
      <div className="App-body">
        <Login/>
      </div>
      <div className="App-footer">
        <Footer/>
      </div>
    </>
  )
}

export default App;

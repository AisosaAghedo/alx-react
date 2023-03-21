import React from 'react';
import Header from "../Header/Header.js";
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList.js"
import './App.css'
import PropTypes from 'prop-types';

App.defaultProps = { isLoggedIn: false };

function App(props) {
  const LoginState = () => {
  if (props.isLoggedIn === true) {
    return <CourseList />;
  } else {
    return (
      <div className="App-body">
        <Login />
      </div>
    );
  }
};
  return (
    <>
      <Notifications />
      <div className="App-header">
        <Header />
      </div>
      {LoginState()}
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;


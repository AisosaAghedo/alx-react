import React from 'react';
import './Notifications.css'
import close from '../asset/close-icon.png'
import {getLatestNotification} from '../Utils/utils'
import NotificationItem from './NotificationItem.js'
import PropTypes from 'prop-types';

export default function Notifications(props){
  const showMenu = () =>{
    if (props.displayDrawer === true) {
      return (
        <>
          <div className="Notifications">
            <button
              style={{
                position: "absolute",
                right: "0.5rem",
                top: "1em",
                background: "transparent",
                border: "none",
              }}
              aria-label="Close"
              onClick={() => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={close} id="close" alt=""></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem
                type="urgent"
                html={{ __html: getLatestNotification() }}
              />
            </ul>
          </div>
        </>
      );
    }
  }
return (
  <>
    <div className="menuItem">Your notifications</div>
    {showMenu()}
  </>
);
}

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
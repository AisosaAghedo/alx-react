import React from 'react';
import './Notifications.css'
import close from '../asset/close-icon.png'
import {getLatestNotification} from '../Utils/utils'
import NotificationItem from './NotificationItem.js'

export default function Notifications(){
  return (
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
  );
}
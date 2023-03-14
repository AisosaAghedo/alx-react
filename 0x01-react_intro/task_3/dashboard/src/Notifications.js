import React from 'react';
import './Notifications.css'
import close from './close-icon.png'
import {getLatestNotification} from './utils'

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
      <img src={close} id="close"></img>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default" className="default">
          New course available
          </li>
          <li data-priority="urgent" className="urgent">
            New resume available
            </li>
            <li data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            </div>
            );
}
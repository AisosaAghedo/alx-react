import React, { Component } from 'react';
import "./Notifications.css";


export default function NotificationItem(props){
  return (
  <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>
  );

}
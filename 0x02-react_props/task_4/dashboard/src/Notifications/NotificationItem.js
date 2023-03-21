import React, { Component } from 'react';
import "./Notifications.css";
import PropTypes from 'prop-types';


export default function NotificationItem(props){
  return (
  <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>
  );

}
NotificationItem.defaultProps = { type: "default" };

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};
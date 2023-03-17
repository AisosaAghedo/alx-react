import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow(props){
  if (props.isHeader === true){
   if (props.textSecondCell === null){
    return (
      <tr>
        <th colSpan = '2'>{props.textFirstCell}</th>
      </tr>
    );
   }else{
    return (
      <>
      <tr><th>{props.textFirstCell}</th></tr><tr><th>{props.textSecondCell}</th></tr>
      </>
    );
   }
  }else{
   <>
     <tr>
       <td>{props.textFirstCell}</td>
     </tr>
     <tr>
       <td>{props.textSecondCell}</td>
     </tr>
   </>;


  }
}
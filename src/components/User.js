/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

//Only the span, not the UserPage
const User = (props) => {
  return (
    <div className='main-user-container' id={props.id}>
      <div className='pna-wrapper' id={props.id}>
        <span className='pp-span' id={props.id}><img className='mini-pic' src={props.picLink}></img></span>
        <span className='na-span' id={props.id}>{`${props.firstName}, ${props.age} `}</span>
        <button onClick={props.handleDelete} id={props.id} style={{ display: 'none' }}>delete</button>
      </div>
      <span id={props.id} onClick={props.pickUser}>
        <span className='see-profile-span' id={props.id}>
          {'>'}
        </span>
      </span>
    </div>
  )
}

export default User
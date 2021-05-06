/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch, Route, Link, useHistory
} from 'react-router-dom'

import React, { useEffect } from 'react'
import { IoPowerOutline } from 'react-icons/io5'
import Header from './Header'
import Nav from './Nav'

const Home = (props) => {

  return (
    <div id='home-page-container'>
      <Header handleNav={props.handleNav} showHeaderLinks={props.showHeaderLinks}/>
      <Nav showHeaderLinks={props.showHeaderLinks} handleNav={props.handleNav}/>
      <div id='home-content-container'>
        <span id='brand'>wunder</span>
        <div>
          <span onClick={props.handleSwitch}>
            { props.on
              ?
              <div className='on-off-container'>
                <IoPowerOutline id='switch-off' size={50}/>
                <span className='switch-text'>stop the stream</span>
              </div>
              :
              <div className='on-off-container'>
                <IoPowerOutline id='switch-on' size={50}/>
                <span className='switch-text' style={{ color: 'lightgray' }}>start the stream</span>
              </div>
            }
          </span>
          <div id='app-info-container'>
            <span id='app-info-header'>
              <Link className='link-home' to='/users'>Users</Link>
            </span>
            <span id='app-info-data'>{props.number}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import React from 'react'
import { IoEarth, IoMenu } from 'react-icons/io5'

const Header = (props) => {
  return (
    <div id='main-header-container'>
      { props.goBack
        ?
        <span
          className='go-back-button'
          onClick={props.handleGoBack}>
          <Link id='go-back-link' to={props.path}>{'< '}</Link>
        </span>
        :
        null
      }
      <span id='header-page-name'>
        {props.name}
      </span>
      <div id='header-link-nav' title='navigate'>
        <span
          onClick={props.handleNav}
          style={{ color: props.showHeaderLinks ? 'black' : 'lightgray' }}>
          <IoMenu size={35}/>
        </span>
      </div>
    </div>
  )
}

export default Header

/*
      <div id='header-links-container' style={{ display: props.showHeaderLinks ? '' : 'none' }}>
        <Link className='header-link' to="/">home</Link>
        <Link className='header-link' to="/users">users</Link>
      </div>
*/
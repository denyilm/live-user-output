/* eslint-disable no-unused-vars */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

const Nav = (props) => {
  return (
    <div id='header-links-container' style={{ display: props.showHeaderLinks ? '' : 'none' }}>
      <Link className='header-link' to="/" onClick={props.handleNav}>home</Link>
      <Link className='header-link' to="/users" onClick={props.handleNav}>users</Link>
    </div>
  )
}

export default Nav
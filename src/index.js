/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import {
  BrowserRouter as Router,
  Switch, Route, Link, useHistory, BrowserRouter
} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
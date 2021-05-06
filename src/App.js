/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

//Packages
import {
  BrowserRouter as Router,
  Switch, Route, Link, useHistory
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
//React components
import Users from './components/Users'
import UserPage from './components/UserPage'
import Home from './components/Home'
//functions
import createUserStream from './functions/createUserStream'
import handleGetOneRequest from './functions/handleGetOneRequest'
import renderProfiles from './functions/renderProfiles'
import fetchAndAddUser from './functions/fetchAndAddUser'
import goToUserPage from './functions/goToUserPage'
import removeUser from './functions/removeUser'

const App = () => {
  const [flow, setFlow] = useState(false)
  const [newProfile, setNewProfile] = useState(null)
  const [users, setUsers] = useState([])
  const [userIndex, setUserIndex] = useState(0)
  const [userId, setUserId] = useState(null)
  const [user, setUser] = useState({})
  const [country, setCountry] = useState({})
  const [showHeaderLinks, setShowHeaderLinks] = useState(false)
  const history = useHistory()

  //render profiles
  useEffect(() => {
    renderProfiles({ setUsers, setUserIndex })
  },[userIndex])
  //

  //crete user stream
  useEffect(() => {
    createUserStream({
      flow,
      setUserIndex,
      setNewProfile,
      userIndex
    })
  },[userIndex, flow])
  //

  //Handle direct user requests
  useEffect(() => {
    handleGetOneRequest({
      history,
      setUser,
      setCountry,
      setUserId
    })
  },[])
  //

  //show and hide nav links
  const handleNav = () => setShowHeaderLinks(!showHeaderLinks)
  //

  //S-pickUser
  const pickUser = (event) => {
    event.preventDefault()
    let id = event.target.id
    goToUserPage({
      id, setUser, setUserId, setCountry, history
    })
  }
  //E-pickUser


  //Hidden buttons in the users page: fetchUser, delete
  //S-handleFetchUser
  const handleFetchUser = (event) => {
    event.preventDefault(event)
    fetchAndAddUser({ setNewProfile, setUserIndex, userIndex })
  }
  //E-handleFetchUser

  //S-handleDelete
  const handleDelete = (event) => {
    event.preventDefault()
    let id = Number(event.target.id)
    removeUser({ users, id, setUserIndex, userIndex })
  }
  //E-handleDelete

  return (
    <div id='main-page-container'>
      <div id='main-content-container'>
        <Switch>
          <Route path={`/users/${userId}`}>
            <UserPage
              user={user}
              country={country}
              handleNav={handleNav}
              showHeaderLinks={showHeaderLinks}
            />
          </Route>
          <Route path={`/users`}>
            <Users
              handleNav={handleNav}
              showHeaderLinks={showHeaderLinks}
              users={users}
              pickUser={pickUser}
              handleDelete={handleDelete}
            />
            <button onClick={handleFetchUser} style={{ display: 'none' }}>fetchUser</button>
          </Route>
          <Route path={``}>
            <Home
              handleNav={handleNav}
              showHeaderLinks={showHeaderLinks}
              handleSwitch={() => setFlow(!flow)}
              on={flow}
              number={users.length}
            />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App

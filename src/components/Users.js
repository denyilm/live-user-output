/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import User from './User'
import Header from './Header'
import Nav from './Nav'

const Users = (props) => {

  let copyArray = props.users.slice()

  return (
    <div id='users-page-container'>
      <Header
        name='USERS'
        handleNav={props.handleNav}
        showHeaderLinks={props.showHeaderLinks}
        goBack={true}
        path='/'
      />
      <Nav showHeaderLinks={props.showHeaderLinks} handleNav={props.handleNav}/>
      <div id='main-users-container'>
        {
          copyArray.reverse().map(user =>
            <div key={user.id}>
              <User
                picLink={user.picture.thumbnail}
                firstName={user.name.first}
                age={user.dob.age}
                id={user.id}
                pickUser={props.pickUser}
                handleDelete={props.handleDelete}
              />
            </div>)
        }
      </div>
    </div>
  )
}

export default Users
/* eslint-disable no-unused-vars */
import fetchUser from './fetchUser'
import userService from '../services/users'

const fetchAndAddUser = ({
  setNewProfile,
  setUserIndex,
  userIndex
}) => {
  fetchUser()
    .then(randomUser => {
      setNewProfile(randomUser)
      userService
        .addUser(randomUser)
        .then(res => {
          setUserIndex(userIndex+1)
        })
    })
    .catch(err => {
      console.log(err)
      setUserIndex(userIndex)
    })
}

export default fetchAndAddUser
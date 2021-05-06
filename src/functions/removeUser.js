/* eslint-disable no-unused-vars */
import userService from '../services/users'

const removeUser = ({
  users,
  id,
  setUserIndex,
  userIndex
}) => {
  let deletedUser = users.find(user => user.id === id)
  userService
    .deleteUser(deletedUser)
    .then(res => {
      setUserIndex(userIndex-1)
    })
}

export default removeUser
import userService from '../services/users'

const renderProfiles = ({
  setUsers,
  setUserIndex
}) => {
  userService
    .getAll()
    .then(data => {
      setUsers(data)
      setUserIndex(data.length)
    })
}

export default renderProfiles
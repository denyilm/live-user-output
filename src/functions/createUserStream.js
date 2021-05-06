import fetchUser from './fetchUser'
import userService from '../services/users'

const createUserStream = (
  {
    flow,
    setUserIndex,
    setNewProfile,
    userIndex
  }
) => {

  if(flow){
    let timerCo = 3 + Math.floor(Math.random() * 13)
    let timeWait = timerCo*1000

    console.log('new user in [s]: ', timeWait/1000)

    setTimeout(() => {
      setUserIndex(userIndex+1)
    }, timeWait)

    fetchUser()
      .then(randomUser => {
        setNewProfile(randomUser)
        userService
          .addUser(randomUser)
      })
      .catch(err => {
        console.log(err)
        setUserIndex(userIndex)
      })
  }
}

export default createUserStream

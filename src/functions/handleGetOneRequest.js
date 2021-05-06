import userService from '../services/users'
import countryService from '../services/countries'


const handleGetOneRequest = (
  {
    history,
    setUser,
    setCountry,
    setUserId
  }
) => {
  if(history.location.pathname.includes('users/')){
    let id = history.location.pathname.split('/')[2]
    //console.log(userUrl)
    userService
      .getOneUser(id)
      .then(fetchedUser => {
        //console.log(fetchedUser)
        setUser(fetchedUser)
        countryService
          .getOneCountry(fetchedUser.location.country)
          .then(data => {
            //console.log(data)
            setCountry(data)
            setUserId(id)
          })
      })
  }
}

export default handleGetOneRequest
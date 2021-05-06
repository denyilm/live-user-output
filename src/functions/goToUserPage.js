import userService from '../services/users'
import countryService from '../services/countries'

const goToUserPage = (
  {
    id,
    setUser,
    setUserId,
    setCountry,
    history
  }
) => {
  let userUrl = '/users/'
  if(id !== ''){
    userUrl = '/users/' + id
    userService
      .getOneUser(id)
      .then(data => {
        setUser(data)
        setUserId(id)
        countryService
          .getOneCountry(data.location.country)
          .then(data => {
            setCountry(data)
            history.push(userUrl)
          })
      })
  }
}

export default goToUserPage
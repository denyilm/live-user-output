/* eslint-disable no-unused-vars */
import axios from 'axios'

const fetchUser = async() => {

  let data = await axios
    .get('https://api.randomuser.me/')
    .then(
      res => {
        let profileStr = JSON.stringify(res.data.results[0])
        let replacedProfileStr = profileStr.replace('"id"', '"credentials"')
        let profileObj = JSON.parse(replacedProfileStr)
        return profileObj
      }
    )

  return data
}

export default fetchUser
/* eslint-disable no-unused-vars */
import axios from 'axios'

const baseUrl = 'http://localhost:3001'

//
const getAll = () => {
  const req = axios.get(`${baseUrl}/users`)
  return req.then(response => response.data)
}
//

//
const getOneUser = (id) => {
  const req = axios.get(`${baseUrl}/users/${id}`)
  return req.then(res => res.data)
}
//

//
const addUser = (newUser) => {
  const req = axios.post(`${baseUrl}/users`, newUser)
  return req.then(res => res)
}
//

//
const deleteUser = (user) => {
  const id = user.id
  const req = axios.delete(`${baseUrl}/users/${id}`, user)
  return req.then(res => res)
}
//

export default {
  getAll,
  getOneUser,
  addUser,
  deleteUser
}


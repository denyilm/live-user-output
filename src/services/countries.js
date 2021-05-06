/* eslint-disable no-unused-vars */
import axios from 'axios'

const baseUrl = 'http://localhost:3001'

const getAllCountries = () => {
  const req = axios.get(`${baseUrl}/countries`)
  return req.then(response => response.data)
}

const getOneCountry = (countryName) => {
  let countries = []
  countries = getAllCountries().then(res => res)
  return countries.then(data => data.find(c => c.name === countryName))
}

export default {
  getOneCountry
}
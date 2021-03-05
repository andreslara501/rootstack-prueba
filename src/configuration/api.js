import axios from 'axios'
import router from '../router';

const urlBase = 'https://coding-test.rootstack.net/api/'

const configService = axios.create({
  baseURL: urlBase
});

const api = {
  async login (loginData) {
    return await configService(`auth/login`, {
      method: 'POST',
      data: loginData
    })
    .catch(function (error) {
      return error.response
    })
  },
  async getJobs (token) {
    return await configService(`jobs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .catch(function (error) {
      router.push('/')
      return error.response
    })
  },
  async getMe (token) {
    return await configService(`auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .catch(function (error) {
      router.push('/')
      return error.response
    })
  }
}

export default api

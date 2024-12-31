import axios from 'axios'
export function postIdByUser(id) {
  return axios.post('http://localhost:8080/users', {id})
}

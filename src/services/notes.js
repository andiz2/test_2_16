import axios from 'axios'
const baseUrl = 'https://mocki.io/v1/ffe1896c-1a3a-4ea1-8cdf-bb7d05af7ff4'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  console.log('request create', request)
  return request.then(response => {
  		console.log('request create response', response)
  		console.log('request create response.data', response.data)
  	}
  )}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deletePers = id => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then(response =>response.data)
}


export default { 
  getAll, 
  create, 
  update,
  deletePers
}
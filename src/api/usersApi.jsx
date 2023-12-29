import axios from 'axios'

const usersApi = axios.create({
  method: 'GET',
  baseURL: 'http://localhost:8045/api',
})

export const usersUrlEndpoint = '/users/'

export const getUsers = async () => {
  const response = await usersApi.get(usersUrlEndpoint)
  return response.data.data
}

export const addUser = async (data) => {
  const response = await usersApi.post(usersUrlEndpoint, data)
  return response.data.data
}

export const updateUser = async ({ id, name }) => {
  const response = await usersApi.put(`${usersUrlEndpoint}${id}`, {
    name: name,
  })
  return response.data.data
}

export const deleteUser = async (id) => {
  const response = await usersApi.delete(`${usersUrlEndpoint}${id}`)
  return response.data
}

import React from 'react'
import useSWR from 'swr'
import { Toaster, toast } from 'sonner'

import UserForm from './components/UserForm'
import UsersList from './components/UsersList'

import {
  addUserOptions,
  deleteUserOptions,
  updateUserOptions,
} from './api/usersSWROptions'
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
  usersUrlEndpoint as cacheKey,
} from './api/usersApi'

const App = () => {
  const { isLoading, error, data, mutate } = useSWR(cacheKey, getUsers, {
    onSuccess: (data) => data.sort((a, b) => b.id - a.id),
  })

  const addUserMutation = async (name, email) => {
    try {
      // getting id for a new user
      const maxId = Math.max(...data.map((user) => user.id), 0)

      // this user will only be used for optimistic data
      // after a request to the server, the user's data will be updated with the server's response
      const newUser = {
        id: maxId + 1,
        name: name,
        email: email,
        created_at: new Date().toISOString(),
      }

      await mutate(addUser(newUser), addUserOptions(newUser))
      toast.success('Success! Added new user.')
    } catch (err) {
      toast.error('Failed to add the new user.')
    }
  }

  const updateUserMutation = async (updatedUser) => {
    try {
      await mutate(updateUser(updatedUser), updateUserOptions(updatedUser))
      toast.success('Success! User updated.')
    } catch (err) {
      toast.error('Failed to update user.')
    }
  }

  const deleteUserMutation = async (id) => {
    try {
      await mutate(deleteUser(id), deleteUserOptions({ id }))
      toast.success('Success! User deleted.')
    } catch (err) {
      toast.error('Failed to delete user.')
    }
  }

  return (
    <div className="w-1/3 p-8">
      <Toaster position="top-center" richColors />

      {isLoading && <div>Loading...</div>}
      {error && <div>Error while loading users list...</div>}

      {!isLoading && !error && (
        <>
          <UserForm addUserMutation={addUserMutation} />
          <UsersList
            data={data}
            updateUserMutation={updateUserMutation}
            deleteUserMutation={deleteUserMutation}
          />
        </>
      )}
    </div>
  )
}

export default App

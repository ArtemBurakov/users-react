import React, { useState } from 'react'

import SelectedUserInfo from './SelectedUserInfo'

const UserList = ({ data, updateUserMutation, deleteUserMutation }) => {
  const [selectedUser, setSelectedUser] = useState()

  return (
    <div className="mb-8">
      <h1 className="text-2xl mb-4">User List</h1>
      <ul role="list">
        {data.map((user) => (
          <li
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className="cursor-pointer bg-white rounded-lg p-4 mb-2 hover:bg-primary hover:text-white transition duration-300 relative shadow-md flex items-center justify-between"
          >
            <span className="truncate">{user.name}</span>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          <div className="bg-white p-6 w-1/3 rounded-lg z-10">
            <SelectedUserInfo
              user={selectedUser}
              onClose={() => {
                setSelectedUser(null)
              }}
              updateUserMutation={updateUserMutation}
              deleteUserMutation={deleteUserMutation}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default UserList

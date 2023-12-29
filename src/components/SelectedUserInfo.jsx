import React, { useState, useEffect } from 'react'

const SelectedUserInfo = ({
  user,
  onClose,
  updateUserMutation,
  deleteUserMutation,
}) => {
  const [name, setName] = useState(user.name)
  const [isNameChanged, setIsNameChanged] = useState(false)

  useEffect(() => {
    setIsNameChanged(name !== user.name)
  }, [name, user.name])

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUserMutation({ ...user, name: name })
    onClose()
  }

  const handleDelete = (id) => {
    deleteUserMutation(id)
    onClose()
  }

  const isFormValid = name.trim() !== ''

  return (
    <div>
      <h1 className="text-2xl mb-4">Selected User Info</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-600"
          >
            Name:
          </label>
          <input
            id="userName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:border-primary transition duration-300"
          />
        </div>
        <button
          type="submit"
          disabled={!isFormValid || !isNameChanged}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition duration-300"
        >
          Update User
        </button>
      </form>

      <div className="flex mt-6 justify-end space-x-2">
        <button
          onClick={() => handleDelete(user.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={onClose}
          style={{ backgroundColor: '#6B7280' }}
          className="text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default SelectedUserInfo

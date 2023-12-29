import React, { useState } from 'react'

const UserForm = ({ addUserMutation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addUserMutation(name, email)

    setName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:border-primary transition duration-300"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:border-primary transition duration-300"
        />
      </div>
      <button
        type="submit"
        disabled={name.trim() === '' || email.trim() === ''}
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition duration-300"
      >
        Create User
      </button>
    </form>
  )
}

export default UserForm

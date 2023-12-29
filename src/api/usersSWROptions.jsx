export const addUserOptions = (newUser) => {
  return {
    // optimistic data displays until we populate cache
    // param is previous data
    optimisticData: (users) => [...users, newUser].sort((a, b) => b.id - a.id),
    rollbackOnError: true,

    populateCache: (added, users) =>
      [...users, added].sort((a, b) => b.id - a.id),
    revalidate: false,
  }
}

export const updateUserOptions = (updatedUser) => {
  return {
    // optimistic data displays until we populate cache
    // param is previous data
    optimisticData: (users) => {
      const prevUsers = users.filter((user) => {
        return user.id !== updatedUser.id
      })
      return [...prevUsers, updatedUser].sort((a, b) => b.id - a.id)
    },
    rollbackOnError: true,

    // response from API request is 1st param
    // previous data is 2nd param
    populateCache: (updated, users) => {
      const prevUsers = users.filter((user) => {
        return user.id !== updatedUser.id
      })
      return [...prevUsers, updated].sort((a, b) => b.id - a.id)
    },
    revalidate: false,
  }
}

export const deleteUserOptions = ({ id }) => {
  return {
    // optimistic data displays until we populate cache
    // param is previous data
    optimisticData: (users) => {
      return users.filter((user) => {
        return user.id !== id
      })
    },
    rollbackOnError: true,

    // response from API request is 1st param
    // previous data is 2nd param
    populateCache: (emptyResponseObj, users) => {
      return users.filter((user) => {
        return user.id !== id
      })
    },
    revalidate: false,
  }
}

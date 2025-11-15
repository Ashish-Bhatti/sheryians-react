import React from 'react'

const App = () => {

  let user = JSON.parse(localStorage.getItem('userDetails'))
  console.log(user)

  return (
    <div>{user.name},{user.age},{user.city}</div>
  )
}

export default App
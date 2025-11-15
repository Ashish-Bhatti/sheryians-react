import React from 'react'

const App = () => {

  let age = localStorage.getItem('age')

  let user = localStorage.getItem('user')

  console.log(age,user)

  let userInput = JSON.parse(localStorage.getItem('userDetails'))
  console.log(userInput)

  return (
    <div>App</div>
  )
}

export default App
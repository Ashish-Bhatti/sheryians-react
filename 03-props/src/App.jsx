import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Ashu' age={25} img='https://plus.unsplash.com/premium_photo-1728892768695-ebebed48ff90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735'/>
      <Card user='Ombir' age={54} img='https://images.unsplash.com/photo-1762382745293-2f6ef0c23e1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'/>
      <Card user='Rahul' age={34} img='https://images.unsplash.com/photo-1762496991966-584520e6ff1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'/>
    </div>
  )
}

export default App
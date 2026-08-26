import { useState } from 'react'
import './app.css'
import Users from './Users.jsx'

function App() {
  const [users] = useState([
    {
      name: 'Ethan',
      email: 'ethan@example.com',
      gen: 32,
    },
    {
      name: 'Joseph',
      email: 'joseph@example.com',
      gen: 32,
    },
    {
      name: 'prince',
      email: 'prince@example.com',
      gen: 32,
    },
  ])

  return ( 
    <main className="users-page">
      <header className="page-header">
        <h1>Our users</h1>
      </header>
      <Users users={users} />
    </main>
  )
}

export default App

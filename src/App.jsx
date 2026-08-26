import { useState } from 'react'
import './app.css'
import UsersForm from './UsersForm.jsx'

function App() {
  const [users, setUsers] = useState([])

  const handleAddUser = (newUser) => {
    setUsers((currentUsers) => [...currentUsers, newUser])
  }

  return ( 
    <main className="users-page">
      <header className="page-header">
        <h1>Our users</h1>
      </header>
      <UsersForm onAddUser={handleAddUser} />
      {users.length === 0 ? (
        <p className="empty-message">No users added</p>
      ) : (
        <section className="user-list" aria-label="User directory">
          {users.map((user) => (
            <article className="user-card" key={`${user.email}-${user.name}`}>
              <div className="user-details">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              <span className="generation">Gen {user.gen}</span>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default App

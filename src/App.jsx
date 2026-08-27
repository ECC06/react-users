import { useState } from 'react'
import './app.css'
import UsersForm from './UsersForm.jsx'
import Users from './Users.jsx'

function App() {
  const [users, setUsers] = useState([])

  const handleAddUser = (newUser) => {
    setUsers((currentUsers) => [...currentUsers, newUser])
  }

  const handleDeleteUser = (email) => {
    setUsers((currentUsers) => currentUsers.filter((user) => user.email !== email))
  }

  const handleEditContact = (updatedUser) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user,
      ),
    )
  }

  return ( 
    <main className="users-page">
      <header className="page-header">
        <h1>Our users</h1>
      </header>
      <UsersForm onAddUser={handleAddUser} />
      <Users
        users={users}
        onDeleteUser={handleDeleteUser}
        onEditContact={handleEditContact}
      />
    </main>
  )
}

export default App

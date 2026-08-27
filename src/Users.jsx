import { useState } from 'react'
import EditContactsForm from './EditContactsForm.jsx'

function Users({ users, onDeleteUser, onEditContact }) {
  const [contactToEdit, setContactToEdit] = useState(null)

  if (users.length === 0) {
    return <p className="empty-message">No users added</p>
  }

  return (
    <section className="user-list" aria-label="User directory">
      {users.map((user) => (
        <article className="user-card" key={user.id}>
          <div className="user-details">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          <span className="generation">Gen {user.gen}</span>
          <button
            className="edit-button"
            type="button"
            onClick={() => setContactToEdit(user)}
          >
            Edit
          </button>
          <button
            className="delete-button"
            type="button"
            onClick={() => onDeleteUser(user.email)}
          >
            Delete
          </button>
        </article>
      ))}
      {contactToEdit && (
        <EditContactsForm
          contact={contactToEdit}
          onEditContact={(updatedContact) => {
            onEditContact(updatedContact)
            setContactToEdit(null)
          }}
          onClose={() => setContactToEdit(null)}
        />
      )}
    </section>
  )
}

export default Users

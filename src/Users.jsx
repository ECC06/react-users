function Users({ users }) {
  return (
    <section className="user-list" aria-label="User directory">
      {users.map((user) => (
        <article className="user-card" key={user.email}>
          <div className="user-details">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          <span className="generation">Gen {user.gen}</span>
        </article>
      ))}
    </section>
  )
}

export default Users

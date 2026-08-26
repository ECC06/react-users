import { Component } from 'react'

class UsersForm extends Component {
  state = {
    name: '',
    email: '',
    gen: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.onAddUser(this.state)
    this.setState({
      name: '',
      email: '',
      gen: '',
    })
  }

  render() {
    const { name, email, gen } = this.state

    return (
      <form className="users-form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Gen
          <input
            name="gen"
            type="number"
            value={gen}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit">Add user</button>
      </form>
    )
  }
}

export default UsersForm

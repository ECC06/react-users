import { Component } from 'react'

class EditContactsForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ...props.contact }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.onEditContact(this.state)
  }

  render() {
    const { name, email, gen } = this.state

    return (
      <div className="modal-backdrop" role="presentation">
        <div className="edit-modal" role="dialog" aria-modal="true" aria-labelledby="edit-contact-title">
          <h2 id="edit-contact-title">Edit contact</h2>
          <form className="users-form" onSubmit={this.handleSubmit}>
            <label>
              Name
              <input name="name" type="text" value={name} onChange={this.handleChange} required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={email} onChange={this.handleChange} required />
            </label>
            <label>
              Gen
              <input name="gen" type="number" value={gen} onChange={this.handleChange} required />
            </label>
            <button type="submit">Save changes</button>
            <button type="button" className="cancel-button" onClick={this.props.onClose}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default EditContactsForm

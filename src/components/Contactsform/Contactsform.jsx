import { Component } from 'react';

class Contactsform extends Component {
  state = {
    name: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleChange}
              className="form__input"
              type="text"
              name="name"
              required
            />
          </label>
          <button className="form__button" type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
export { Contactsform };

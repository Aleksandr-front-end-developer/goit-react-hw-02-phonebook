import { nanoid } from 'nanoid';
import { Component } from 'react';

import { Contactsform } from './Contactsform/Contactsform';
import { ContactsList } from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
  };

  handleSubmit = data => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { ...data, id: nanoid() }],
      };
    });
  };

  render() {
    return (
      <div>
        <Contactsform onSubmit={this.handleSubmit} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
export { App };

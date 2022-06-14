import { Component } from 'react';

import { ContactForm } from 'components/ContactForm';
import Contacts from 'components/ContactList';
import Filter from 'components/Filter';
import s from './App.module.css';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = id => {
    this.setState({
      contacts: [...this.state.contacts.filter(contact => contact.id !== id)],
    });
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  addContact = data => {
    return this.state.contacts.map(contact => contact.name).includes(data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleFilterChange} />
        <Contacts
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export { App };

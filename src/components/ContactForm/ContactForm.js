import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  numberInputId = nanoid();
  nameInputId = nanoid();

  handleChange = event => {
    const { name } = event.currentTarget;
    this.setState({
      [name]: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addContact({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleSubmit, handleChange, nameInputId, numberInputId } = this;
    const { name, number } = this.state;
    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor={nameInputId} className={s.label}>
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
          value={name}
          onChange={handleChange}
        />
        <label htmlFor={numberInputId} className={s.label}>
          Number
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
          value={number}
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export { ContactForm };

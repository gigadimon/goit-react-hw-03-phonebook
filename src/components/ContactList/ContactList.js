import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import s from './ContactList.module.css';

export default function ContactList({ contacts, filter, deleteContact }) {
  return (
    <ul className={s.contactList}>
      {filter
        ? contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ name, number, id }) => (
              <ContactListItem
                name={name}
                number={number}
                key={id}
                handleClick={() => deleteContact(id)}
              />
            ))
        : contacts.map(({ name, number, id }) => (
            <ContactListItem
              name={name}
              number={number}
              key={id}
              handleClick={() => deleteContact(id)}
            />
          ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

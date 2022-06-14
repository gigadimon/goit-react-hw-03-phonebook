import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

export default function ContactListItem({ name, number, handleClick }) {
  return (
    <li className={s.item}>
      <span className={s.name}>{name}:</span>{' '}
      <span className={s.number}>{number}</span>
      <button onClick={handleClick} className={s.button}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

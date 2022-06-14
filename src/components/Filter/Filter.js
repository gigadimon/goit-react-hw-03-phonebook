import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Filter.module.css';

export default function Filter({ filter, handleChange }) {
  const inputId = nanoid();
  return (
    <>
      <label htmlFor={inputId} className={s.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        className={s.input}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

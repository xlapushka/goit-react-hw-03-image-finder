import PropTypes from 'prop-types';
// import { IoPulse, IoKeypad } from 'react-icons/io5';
import css from '../styles.module.css';

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export function Searchbar({onSubmit}) {

return (  
    <header className={css.header}>
      <form>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos.."
        />

        <button type="submit" className={css.submitBtn}>
          <span>Search</span>
        </button>
      </form>
    </header>
  )  
}
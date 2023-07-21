import PropTypes from 'prop-types';
import css from '../styles.module.css';


export function Searchbar({onSubmit}) { 

  return (  
      <header className={css.header}>
        <form onSubmit={onSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos.."
          />

          <button 
            type="submit" 
            className={css.submitBtn}
            >
              <span>Search</span>
          </button>
        </form>
      </header>
    )  
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
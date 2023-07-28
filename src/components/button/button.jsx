import PropTypes from 'prop-types';

import css from '../styles.module.css';


export function Button({onClick}) {

  return (
    <button type='button' className={css.btnLoadMore} onClick={onClick}>
      Load more...
    </button>  
  )
};


Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

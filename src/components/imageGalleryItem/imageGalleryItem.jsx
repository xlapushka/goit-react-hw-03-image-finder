import PropTypes from 'prop-types';
import css from '../styles.module.css';

export function ImageGalleryItem({smallSize, bigSize, keyWord, onClick}) {
  return (
    <li className={css.card}>
        <img src={smallSize} alt={keyWord}/>
    </li>
  )
}

ImageGalleryItem.propTypes = {
  smallSize: PropTypes.string,
  // bigSize: PropTypes.string
  keyWord : PropTypes.string, 
  onClick : PropTypes.func,
}
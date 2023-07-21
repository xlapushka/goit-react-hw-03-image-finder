import PropTypes from 'prop-types';
import css from '../styles.module.css';

export function ImageGalleryItem({smallSize,keyWord}) {
  return (
    <li className={css.card}>
        <img src={smallSize} alt={keyWord}/>
    </li>
  )
}

ImageGalleryItem.propTypes = {
  photos: PropTypes.object
}
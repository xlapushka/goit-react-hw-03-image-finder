import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../imageGalleryItem/imageGalleryItem';
import css from '../styles.module.css';

export function ImageGallery ({photos, keyWord}) {
  return (
    <>
      <ul className={css.cardsList}>
        {photos.map(photo => (
          <ImageGalleryItem
            key = {photo.id}
            smallSize ={photo.webformatURL}
            bigSize={photo.largeImageURL}
            keyWord = {keyWord}
          />
          )  
        )}   
      </ul> 
  </> 
  )
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyWord: PropTypes.string.isRequired
}

 

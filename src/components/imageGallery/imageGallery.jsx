import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../imageGalleryItem/imageGalleryItem';
import css from '../styles.module.css';

export function ImageGallery ({photos, keyWord, openModal}) {
  return (
      <ul className={css.cardsList} onClick={openModal}>
        {photos.map(photo => (
          <ImageGalleryItem
            key = {photo.id}
            smallSize ={photo.webformatURL}
            bigSize={photo.largeImageURL}
            keyWord = {keyWord}
            // onClick={openModal}
            // bigSize={photo.largeImageURL}
          />
          )  
        )}   
      </ul>  
  ) 
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired
}

 

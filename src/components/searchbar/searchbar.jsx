import { Component } from 'react';
import PropTypes from 'prop-types';
// import Notiflix from 'notiflix';

// import { getImages } from '../api/api';

import css from '../styles.module.css';

export class Searchbar extends Component { 

    onSubmit = (e) => {
    e.preventDefault();      

    // if (e.target[0].value.trim() === '') {
    //   Notiflix.Notify.warning('Please enter something to search!');
    //   return
    // } 
    // else {
      // getImages(1, e.target[0].value).then(({photos}) => {
      //   if (photos[0]) {
          // console.log('word', this.state);
          this.props.changeState(e.target[0].value.trim());
        // } else { Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')};
      // })
    // }
  }

  render() {
    return (  
      <header className={css.header}>
        <form onSubmit={this.onSubmit}>
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
}

Searchbar.propTypes = {
  changeState: PropTypes.func,
};
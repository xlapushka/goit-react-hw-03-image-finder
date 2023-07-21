import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { Searchbar } from './searchbar/searchbar';
import { Foooter } from './footer/footer';
import { getImages } from './api/api';
import { ImageGallery } from './imageGallery/imageGallery';
import { Button } from './button/button';
import css from './styles.module.css'

export class App extends Component {
state = {
  page : 1,
  keyWord : '',
  photos: []
};

  onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit", this.state);

    if (e.target[0].value.trim() === '') {
      this.setState ({
        page : 1,
        keyWord : '',
        photos: []
        })
      Notiflix.Notify.warning('Please enter something to search!');
      return
    } else {

      getImages(1, e.target[0].value).then(photos => {
        if (photos[0]) {
          this.setState ({
          page : 2,  
          keyWord: e.target[0].value,
          photos : photos
          })
        } else {
            this.setState ({
              page : 1,
              keyWord : '',
              photos: []
              })
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
        };
      })
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('click');
  //   // let currPage = this.state.page+1;
  //   //   let currPho = this.state.photos;
  //     console.log(prevState, this.state)

  //     getImages(this.state.page, this.state.keyWord).then(photos => {
  //       this.setState ({
  //           page : currPage,
  //           photos : currPho.concat(photos)
  //         })
  //       })
  // }
  
  onClick = (e) => {
    e.preventDefault();
    console.log(this.state)
    getImages(this.state.page, this.state.keyWord).then(photos => {
      this.setState (prevState => ({
          page : prevState.page + 1,
          photos : prevState.photos.concat(photos)
        })
      )}
    )
  }


  render() {

    return (
      <>
        <Searchbar 
          onSubmit={this.onSubmit}
          />
        {this.state.photos.length !== 0 && (
          <section className={css.section}>
            <ImageGallery 
              photos = {this.state.photos}
              keyWord = {this.state.keyWord}
            /> 
            {((this.state.photos.length % 12) === 0) && 
              <Button onClick={this.onClick}/>}
          </section>
        )}  
        
        <Foooter/>
      </>  
      
    )
  }
};

import React, { Component } from 'react';
import Notiflix from 'notiflix';

import { Searchbar } from './searchbar/searchbar';
import { Foooter } from './footer/footer';
import { getImages } from './api/api';
import { ImageGallery } from './imageGallery/imageGallery';
import { Button } from './button/button';
import { Loader } from './loader/loader';

import css from './styles.module.css'



export class App extends Component {
state = {
  page : 1,
  keyWord : '',
  photos: [],
  total: 0,
  loading: false,
};

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      page : 1,
      keyWord : '',
      photos: [],
      total: 0,
      loading : true
    })

    if (e.target[0].value.trim() === '') {
      Notiflix.Notify.warning('Please enter something to search!');
      return
    } else {
      getImages(1, e.target[0].value).then(({photos,total}) => {
        if (photos[0]) {
          this.setState ({
          page : 2,  
          keyWord: e.target[0].value,
          photos : photos,
          total : total
          })
        } else { Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')};
      }).finally(() => 
          this.setState({
          loading : false
        }))
    }
  }
  

  onClick = (e) => {
    e.preventDefault();
    this.setState({
      loading : true
    })

    getImages(this.state.page, this.state.keyWord).then(({photos, total}) => {
      if (photos.length > 0) {
        this.setState (prevState => ({
          page : prevState.page + 1,
          photos : prevState.photos.concat(photos),
          total : total,
        })
      )} 
      // else { Notiflix.Notify.success('That is all photos we have found!');}
    }
    ).finally(() => 
      this.setState({
      loading : false
    }))
  }


  render() {

    return (
      <>
        <Searchbar 
          onSubmit={this.onSubmit}
          /> 

        {this.state.page === 1 && this.state.loading && 
          <section className={css.section}>
            <Loader/>
          </section>
        }  
          
        {this.state.photos.length !== 0 && (
          <section className={css.section}>
            <ImageGallery 
              photos = {this.state.photos}
              keyWord = {this.state.keyWord}
            /> 
            {(this.state.total > this.state.photos.length) && !this.state.loading &&
              <Button onClick = {this.onClick}/>
            }    
            {this.state.loading && <Loader/>}  
          </section>
        )}  
        
        <Foooter/>
      </>  
      
    )
  }
};

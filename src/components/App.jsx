import React, { Component } from 'react';

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

componentDidUpdate(prevProps, prevState) {
    this.setState({
      loading : true
    });

      getImages(this.state.page, this.state.keyWord).then(({photos,total}) => {
          this.setState (prevState => ({
          // page : prevState.page + 1,  
          photos : prevState.photos.concat(photos),
          total : total,
          }))
        }).finally(() => 
          this.setState({
          loading : false
        }))
    }
      

changeState = (keyWord) => {
    this.setState({
      keyWord : keyWord
    })
} 

  onClick = (e) => {
    e.preventDefault();

        this.setState (prevState => ({
          page : prevState.page + 1,
        }))
  }


  render() {

    return (
      <>
        <Searchbar 
          changeState = {this.changeState}
          /> 

        {this.state.page === 1 && this.state.loading && 
          <section className={css.section}>
            <Loader/>
          </section>
        }  
          
        {this.state.photos.length === 0 && (
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

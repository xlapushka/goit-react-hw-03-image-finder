import React, { Component } from 'react';

import { Searchbar } from './searchbar/searchbar';
import { Foooter } from './footer/footer';
import { getImages } from '../api/api';
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
    if (this.state.keyWord === "") {
        return
      } else { 
        if (prevState.loading !== this.state.loading) {
          this.setState({
            loading : true
          });
        }

        getImages(this.state.page, this.state.keyWord).then(({photos,total}) => {
          if (prevState.page !== this.state.page || prevState.keyWord !== this.state.keyWord) {
            this.setState (prevState => ({
              photos : [...prevState.photos, ...photos],
              total : total,
            }))
          }    
        }).finally(() => {if (prevState.loading !== this.state.loading) {
            this.setState({
            loading : false
            })
          }})
      }
}
      

changeKeyWord= (keyWord) =>{
    this.setState({
      page : 1,
      keyWord : keyWord,
      photos: [],
      total: 0,
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
          changeKeyWord = {this.changeKeyWord}
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

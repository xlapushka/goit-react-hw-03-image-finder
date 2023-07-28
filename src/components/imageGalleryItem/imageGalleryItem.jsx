import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from "../modal/modal" 

import css from '../styles.module.css';


export  class ImageGalleryItem extends Component {
  state = {
    smallSize : this.props.smallSize, 
    bigSize : this.props.bigSize, 
    keyWord : this.props.keyWord, 
    showModal : false};

  openModal = () => {
    // console.log("open");
    this.setState({
      showModal: true,
      });
  }
  
  closeModal = () => {
    // console.log("close");
    this.setState({
      showModal: false
      });
  }
  

  render () {
    return (
    <>
      <li className={css.card} onClick={this.openModal}>
          <img src={this.state.smallSize} alt={this.state.keyWord}/>
      </li>  
      {this.state.showModal && <Modal 
          onClose = {this.closeModal}
          children = {<img src={this.state.bigSize} alt={this.state.keyWord} />}
      />}
    </>
    )
  }      
}


ImageGalleryItem.propTypes = {
  smallSize: PropTypes.string.isRequired,
  bigSize: PropTypes.string.isRequired,
  keyWord : PropTypes.string.isRequired, 
}
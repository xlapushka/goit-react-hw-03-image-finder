import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createPortal } from 'react-dom';

import css from '../styles.module.css';


const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.handleEscape)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
    document.body.style.overflow = 'unset';
  }

  handleEscape = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() { 

    return createPortal(    
      <div className={css.modal} onClick={this.handleClick}>
        <div className={css.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot,
    )
  }
} 


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};




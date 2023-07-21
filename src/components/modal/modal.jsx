import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from '../styles.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() {
    console.log('mount')
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    })

  //   window.addEventListener('click', e => {
  //     console.log(e.target.className === 'div.styles_modal__+XqP6');
  //     // if (e.target.class !== 'modalContent') {
  //     //   // console.log(e.code);
  //     //   this.props.onClose();
  //     // }
  // })
  }

  componentWillUnmount() {
    console.log('unmount')
    window.removeEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    })
  }

  render() { return (
    createPortal(    
      <div className={css.modal}>
        <div className={css.modalContent}></div>
      </div>,
      modalRoot,
    ))}
} 

Modal.propTypes = {
  onClose: PropTypes.func,
};

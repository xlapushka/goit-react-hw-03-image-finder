import { Component } from 'react';
import PropTypes from 'prop-types';

import css from '../styles.module.css';

export class Searchbar extends Component { 
    state = {keyWord: ''};
  
    handleChange = (event) => {
      this.setState({keyWord: event.target.value.trim()});
    }
  
    handleSubmit(event) {
      console.log(event.target);
      // this.props.changeState(event.target.value.trim());
      event.preventDefault();
    }


  render() {
    return (  
      <header className={css.header}>
        <form onSubmit={this.handleSubmit}>

          <input
            className={css.input}
            value={this.state.keyWord}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos.."
            onChange={this.handleChange}
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
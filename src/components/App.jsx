import React, { Component } from 'react';
import { Searchbar } from './searchbar/searchbar';
import { Foooter } from './footer/footer';
// import { Filter } from './filter/filter';
// import css from './styles.module.css'

export class App extends Component {
state = {
  keyWord : ''
};

  onSubmit = () => {
    console.log(this.state.keyWord)
  }

  render() {
    
    return (
      <div>
        <Searchbar 
          onSubmit={this.onSubmit}
          />

        <Foooter/> 
      </div>  
      
    )
    
  }


};

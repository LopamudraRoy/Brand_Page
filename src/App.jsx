import React, { Component } from 'react'
import "./App.css";
import Navigation from './components/Navigation';
import Banner from './components/Banner';

export default class App extends Component {
  render() {
    return (
      <div className='brand_page'>
        <Navigation/>
        <Banner/>
      </div>
      
    )
  }
}




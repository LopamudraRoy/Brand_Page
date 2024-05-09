import React, { Component } from 'react'
import '../App.css';

export default class Banner extends Component {
  render() {
    return (
      <>
        <div className="banner">
          <div className='banner_text'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className='banner_button'>
              <button className='primary'>
                Shop Now
              </button>
              <button className='secondary'>
                Category
              </button>
            </div>
          </div>
          <div className='banner_image'>
            <img src="./images/shoe_image.png" alt="shoe-image" />
          </div>
        </div>
        <div className="banner_logo">
          <div className="banner_logo_text">
            <p>also available on</p>
          </div>
          <div className="banner_logo_image">
            <div className="className">
              <img src="./images/flipkart.png" alt="flipkart-image" />
            </div>
            <div className="amazon_logo">
              <img src="./images/amazon.png" alt="amazon-image" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

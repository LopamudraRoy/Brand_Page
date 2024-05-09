import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className='container'>
                    <div className="logo">
                        <img src="/images/brand_logo.png" alt="" />
                    </div>
                    <ul>
                        <li href="#">Menu</li>
                        <li href="#">Location</li>
                        <li href="#">About</li>
                        <li href="#">Contact</li>
                    </ul>
                    <button className='log-in'>Login</button>
                </nav>
            </div>
        )
    }
}



import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
    return (
        <div className="home-container">
            <h1 className="bold-text">Start Posting anonymoustly </h1>
            <h1>where no one will judge.</h1>
            <p className="small-description">Welcome to Stranger disucssion forum.</p>
            <div className="button-container">
                <Link to='/Signup'>
                    <button className="action-button1">Create Your Account</button>
                </Link>
            </div>
            <div>
                <Link to='/Login'>
                    <button className="action-button2">Already have an account? Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
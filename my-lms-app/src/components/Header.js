import React from 'react';
import logo from '../images/logo.jpg';

function Header() {
    return (
        <div>
            <header>
                <img src = {logo} alt = "LMS logo" width = "10%"></img>
                <h1>LMS - Learning Management System</h1>
            </header>
            <div class = "navigation">
                <a href = "/">Homepage</a>
                <a href = "/courses">Courses</a>
                <a href = "/login">Login</a>
            </div>
        </div>
    );
}

export default Header;
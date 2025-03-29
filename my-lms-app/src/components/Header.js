import React from 'react';
import logo from '../images/logo.jpg';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Homepage from '../Homepage.js';
import CoursesPage from '../CoursesPage.js';
import Login from '../Login.js';

function Header() {
    return (
        <div>

            <header>
                <img src = {logo} alt = "LMS logo" width = "10%"></img>
                <h1>LMS - Learning Management System</h1>
            </header>
{/*             <div class = "navigation">
                <Link to = "/">Homepage</Link>
                <Link to = "/courses">Courses</Link>
                <Link to = "/login">Login</Link>
            </div> */}
            <div class = "navigation">
                <a href = "/">Homepage</a>
                <a href = "/courses">Courses</a>
                <a href = "/login">Login</a>
            </div>


        </div>
    );
}

export default Header;
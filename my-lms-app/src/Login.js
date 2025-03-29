import React from 'react';
import './App.css';
import Header from './components/Header.js';
import LoginForm from './components/LoginForm.js';
import Footer from './components/Footer.js';

function Login() {
    return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default Login;
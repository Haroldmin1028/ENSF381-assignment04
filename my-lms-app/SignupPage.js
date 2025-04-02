import React from 'react';
import './App.css';
import Header from './components/Header.js';
import RegForm from './components/RegForm.js';
import Footer from './components/Footer.js';

function Signup() {
    return (
        <div>
            <Header />
            <RegForm />
            <Footer />
        </div>
    );
};

export default Signup;
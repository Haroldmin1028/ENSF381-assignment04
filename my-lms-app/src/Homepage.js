import React from 'react';
import './App.css';
import Header from './components/Header.js';
import MainSection from './components/MainSection.js';
import Footer from './components/Footer.js';

function Homepage() {
    return (
        <div>
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
};

export default Homepage;
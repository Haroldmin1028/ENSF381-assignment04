import React from 'react';
import './App.css';
import Header from './components/Header.js';
import CourseCatalog from './components/CourseCatalog.js';
import EnrollmentList from './components/EnrollmentList.js';
import Footer from './components/Footer.js';

function CoursesPage() {
    return (
        <div className = "courses-page">
            <Header />
            <div className = "content">
                <CourseCatalog />
                <EnrollmentList />
            </div>
            <Footer />
        </div>
    );
};

export default CoursesPage;
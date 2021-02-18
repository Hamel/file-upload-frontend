import React from 'react'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import Image from '../imgs/404.jpg'

// Background image styles
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 845,
        width: `calc(100vw + 48px)`,
        margin: -24,
        padding: 24
    }
};

export default function NotFound() {
    return (
        <div style={styles.paperContainer}>
            <NavBar />
            <h1 style={{ fontSize:'65px', color: 'white', textAlign: 'center', marginTop: '25vh' }}>404 Error</h1>
            <h4 style={{ fontSize:'35px', color: 'white', textAlign: 'center' }}>Page Not Found</h4>
            <Footer />
        </div>
    )
}

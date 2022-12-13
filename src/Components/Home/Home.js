import React from 'react';
import Header from '../Header/Header';
import myPhoto from '../../Assets/pranto-removebg-preview.png';
// import new from '../../Assets/banner.png';
import './Home.css';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Projects from '../../Projects/Projects';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
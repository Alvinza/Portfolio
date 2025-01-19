import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Services from './components/Services';
import Mywork from './components/Mywork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  document.body.style.backgroundColor = "#161513";
  document.body.style.color = "white";
  
    return (
     <div>
      <ToastContainer />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
     </div>
    );
}

export default App;

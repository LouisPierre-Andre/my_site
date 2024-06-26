import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import "./App.css"
import About from './components/AboutPage/About';
import Navbar from './components/Navbar/NavBar1'
import Portfolio from './components/Portfolio/Portfolio';
import ContactPage from './components/ContactPage/ContactPage';
import Footer1 from './components/Footer1/Footer1'






function App() {

  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/portfolio' element={<HomePage />} />

        <Route exact path='/About' element={<About />} />
        <Route exact path='/Projects' element={<Portfolio />} />
        
        <Route exact path='/Contact' element={<ContactPage />} /> 

      </Routes>
      <Footer1 />





    </div>
  );
}

export default App;

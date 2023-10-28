//framework components
import React, { Component } from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//css files
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//project imports
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ErrorComponent from './components/ErrorComponent';
import Notebooks from './components/Notebooks';
import Desktops from './components/Desktops';
import Servers from './components/Servers';
import Softwares from './components/Softwares';
import Services from './components/Services';
import Locations from './components/Locations';
import Contact from './components/Contact';


class App extends Component {

  render(){
  return (

      <Router>
        <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notebooks" element={<Notebooks />} />
            <Route path="/desktops" element={<Desktops />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/softwares" element={<Softwares />} />
            <Route path="/services" element={<Services />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        
        <Footer />
      </Router>  

    );
  }
}

export default App;
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/Nav';
import Slider from './component/Slider';
import About from './component/About';
import Tcard from './component/Tcard';
import Service from './component/Service';
import Logo from './component/Logo';
import React from './component/React';
import Types from './component/Types';
import Footer from './component/Footer';

function App() {
  return (
   <>
   <Nav />
   <Slider />
   <About/>
   <Tcard />
   <Service />
   <React />
   <Types />
   <Logo />
   <Footer />
   </>
  );
}

export default App;

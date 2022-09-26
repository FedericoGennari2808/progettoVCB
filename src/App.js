import './App.css';
import { Footer, Blog, Possibility, Features, WhatVPC, Header } from './containers';
import { CallToAction, Brand } from './components'
import Navbar2 from './components/Navbar2';
import GetStarted from '/Users/gennarifederico/Desktop/ProgettoEsame/layout-app/src/pages/GetStarted/GetStarted.js';
import Comunity from './pages/Comunity';
import Modify from './pages/Modify';
import Home from './pages/HOME/Home';
import { Route, Routes } from 'react-router-dom'
import ComunityHome from './ComunityHome/ComunityHome';



function App() {

  return (
    <>
      <div className="App">
        <div className='gradient__bg'>
          <Navbar2 />

          <div className='containerNav2'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/getStarted' element={<GetStarted />} />
              <Route path='/comunity' element={<Comunity />} />
              <Route path='/modify' element={<Modify />} />
              <Route path='/comunityHome' element={<ComunityHome/>} />

            </Routes>
          </div>
          <Header />


        </div>
        <div className='gradient__bg'>
          <Brand />
          <WhatVPC />
          <Features />
          <Possibility />
          <CallToAction />
          <Blog />
          <Footer />
        </div>

      </div>
        
    </>
  );
}

export default App;

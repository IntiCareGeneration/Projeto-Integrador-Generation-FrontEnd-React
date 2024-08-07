import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './paginas/sobre/Sobre';
import Contato from './paginas/contato/Contato';
import Ajuda from './paginas/ajuda/Ajuda';
import Entrar from './paginas/entrar/Entrar';
import Parcerias from './paginas/parcerias/Parcerias';
import Educacao from './paginas/educacao/Educacao';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/educacao" element={<Educacao />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/ajuda" element={<Ajuda />} />
              <Route path="/parcerias" element={<Parcerias />} />
              <Route path="/entrar" element={<Entrar />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;
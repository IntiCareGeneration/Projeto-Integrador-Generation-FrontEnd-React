import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logoNavbar from '/src/assets/logo-navbar-novo.png'

function Navbar() {
    return (
        <>
            <div className="navbar-container bg-gradient-to-b from-sky-100 to to-white text-slate">
                <div className="navbar-content">
                <Link to="/home" className="text-2xl font-bold uppercase flex items-center">
                <img src={logoNavbar} alt="Logo Inticare" className="h-14 w-auto mr-2" /></Link>

                    <div className="navbar-links">
                        <Link to="/sobre" className="navbar-link">Sobre</Link>
                        <Link to="/educacao" className="navbar-link">Educação</Link>
                        <Link to="/ajuda" className="navbar-link">Ajuda</Link>
                        <Link to="/parcerias" className="navbar-link">Parcerias</Link>
                        <Link to="/cadastro" className="navbar-link">Cadastro</Link>
                        <Link to='/categorias' className="navbar-link">Categorias</Link>
                        <Link to='/cadastroCategoria' className="navbar-link">CadastrarCategoria</Link>
                        <Link to="/login" className="navbar-link">Login</Link>
                        <Link to="/contato" className="navbar-link">Contato</Link>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;

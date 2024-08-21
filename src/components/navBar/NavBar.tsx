import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="navbar-brand">IntiCare</div>
                    <div className="navbar-links">
                        <Link to="/home" className="navbar-link">Home</Link>
                        <Link to="/sobre" className="navbar-link">Sobre</Link>
                        <Link to="/educacao" className="navbar-link">Educação</Link>
                        <Link to="/contato" className="navbar-link">Contato</Link>
                        <Link to="/ajuda" className="navbar-link">Ajuda</Link>
                        <Link to="/parcerias" className="navbar-link">Parcerias</Link>
                        <Link to="/login" className="navbar-link">Login</Link>
                        <Link to="/cadastro" className="navbar-link">Cadastro</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>CadastrarCategoria</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;

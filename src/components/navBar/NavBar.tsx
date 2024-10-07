import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import logoNavbar from '/src/assets/logo-navbar-novo.png';

function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // Estado para o menu

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
    navigate('/login');
    setIsOpen(false); // Fechar o menu após logout
  }

  function handleLinkClick() {
    setIsOpen(false); // Fechar o menu ao clicar em qualquer link
  }

  return (
    <div className="w-full bg-gradient-to-b from-sky-100 to-white py-4 font-roboto">
      <div className="flex justify-between items-center w-full max-w-[1750px] px-4 mx-auto">
        {/* Logo */}
        <Link to="/home">
          <img
            src={logoNavbar}
            alt="Logo Inticare"
            className="h-14 w-auto min-w-[185px] mr-2"
          />
        </Link>

        {/* Botão do Menu Hambúrguer (visível em telas menores) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden w-9 text-[#33a9b6] focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Links do menu - visíveis a partir de telas maiores (>=900px) */}
        <div className="hidden md:flex gap-5">
          <Link to="/cadastroCategoria" className="text-lg font-bold text-[#33a9b6] hover:text-[#49c2d4]">
            Cadastro
          </Link>
          <Link to="/sobre" className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Sobre
          </Link>
          <Link to="/educacao" className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            EduCare
          </Link>
          <Link to="/doacao" className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Care+
          </Link>
          <Link to="/parcerias" className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Parcerias
          </Link>
          <Link to="/ajuda" className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Ajuda
          </Link>
          <Link to="/perfil" className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Perfil
          </Link>
          <Link to="/login" className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Login
          </Link>
          <button
            onClick={logout}
            className="text-lg font-bold w-9 text-[#33a9b6] hover:text-[#015e68]"
          >
            Sair
          </button>
        </div>
      </div>

      {/* Menu Dropdown - visível em telas menores */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 px-4">
          <Link to="/cadastroCategoria" onClick={handleLinkClick} className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Cadastro
          </Link>
          <Link to="/sobre" onClick={handleLinkClick} className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Sobre
          </Link>
          <Link to="/educacao" onClick={handleLinkClick} className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            EduCare
          </Link>
          <Link to="/doacao" onClick={handleLinkClick} className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Care+
          </Link>
          <Link to="/parcerias" onClick={handleLinkClick} className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Parcerias
          </Link>
          <Link to="/ajuda" onClick={handleLinkClick} className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Ajuda
          </Link>
          <Link to="/perfil" onClick={handleLinkClick} className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Perfil
          </Link>
          <Link to="/login" onClick={handleLinkClick} className="text-lg font-bold text-[#33a9b6] hover:text-[#015e68]">
            Login
          </Link>
          <button
            onClick={logout}
            className="text-lg font-bold w-9 text-[#33a9b6] hover:text-[#015e68]"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
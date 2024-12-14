import React from 'react';
import './Header.css'; 
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo da empresa" />
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#usuarios">Usuários</a>
          <a href="#produtos">Produtos</a>
          <a href="#search">🔍</a>
        </nav>
      </div>
      <hr className="divider" />
      <div className="subheader">
        <p>Lista de usuários</p>
      </div>
    </header>
  );
};

export default Header;

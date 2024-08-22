import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="banner-container">
          <img
            src="https://cdn.shopify.com/s/files/1/0276/7332/9753/t/7/assets/deb46b197af4--KV-EAU-DHADRIEN-1280x486.jpg?v=1667876058"
            alt="Banner"
            className="home-banner"
          />
          <div className="overlay-content home-content">
          <div className="home-title">Boas Vindas!</div>
          <div className="home-subtitle">Compromisso em cuidar da sua saúde e bem-estar.</div>
          <div className="home-buttons">
            <Link to="/produtos" className="home-button">Ver Produtos</Link>
            <Link to="/categorias" className="home-button">Ver Categorias</Link>
            <ModalProduto />
          </div>
        </div>
        </div>
        </div>
      <ListaProdutos />
    </>
  );
}

export default Home;

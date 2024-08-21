import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <h2 className="home-title">Boas Vindas!</h2>
                    <p className="home-subtitle">Compromisso em cuidar da sua saúde e bem-estar</p>

                    
                        

                        <div className="home-buttons">
                            <Link to="/produtos" className="home-button">Ver Produtos</Link>
                            <Link to="/categorias" className="home-button">Ver Categorias</Link>
                            <ModalProduto/>

                        </div>
                    </div>
                </div>
         
            <ListaProdutos />
        </>
    );
}

export default Home;

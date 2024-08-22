import React, { useState } from 'react';
import { useCarrinho } from '../../contexts/CarrinhoContext';
import './Carrinho.css';

const Carrinho = () => {
  const { itensDoCarrinho, removerDoCarrinho, setItensDoCarrinho } = useCarrinho();
  const [showDoacao, setShowDoacao] = useState(false);

  // Calcular o total dos itens no carrinho
  const total = itensDoCarrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  // Função para finalizar a compra
  const handleFinalizarCompra = () => {
    alert('Compra finalizada com sucesso!');
  };

  // Função para adicionar itens doados com desconto
  const handleDoarProdutos = () => {
    const confirmacao = window.confirm(
      "Gostaria de realizar a doação dos mesmos produtos para uma pessoa? Eles só vão custar metade do valor para você."
    );
    if (confirmacao) {
      // Criar uma nova lista de itens para doação com preço reduzido
      const novosItens = itensDoCarrinho.map(item => ({
        ...item,
        preco: item.preco / 2,  // Aplicando o desconto de 50%
        id: item.id + 1000000  // Garantir que o ID seja único e do tipo number
      }));

      setItensDoCarrinho(prevItens => [
        ...prevItens,
        ...novosItens
      ]);
    }
  };

  return (
    <div className="container mx-auto my-4">
      <h2 className="text font-bold">Carrinho de Compras</h2>
      <ul className="list-none p-0 max-h-96 overflow-y-auto">
        {itensDoCarrinho.map(item => (
          <li key={item.id} className="border p-4 mb-2">
            <div>
              <p className="font-bold">
                {item.nomeProduto}
                {item.id >= 1000000 && <span className="text-gray-500"> (Doação)</span>}
              </p>
              <p>{item.descricao}</p>
            </div>
            <button
              onClick={() => removerDoCarrinho(item.id)}
              className="bg-red-500 text-white p-2 mt-2"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold" style={{ color: '#33a9b6' }}>Total: R$ {total.toFixed(2)}</h3>
      <button
        onClick={handleFinalizarCompra}
        className="bg-green-500 text-white p-2 mt-4"
      >
        Finalizar Compra
      </button>
      <button
        onClick={handleDoarProdutos}
        className="bg-blue-500 text-white p-2 mt-4 ml-2"
      >
        Doar Produtos
      </button>
    </div>
  );
};

export default Carrinho;

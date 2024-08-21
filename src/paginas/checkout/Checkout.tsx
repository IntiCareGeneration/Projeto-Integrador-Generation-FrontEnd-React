import React from 'react';
import { useCarrinho } from '../../contexts/CarrinhoContext';

const Checkout = () => {
  const { itensDoCarrinho } = useCarrinho();
  
  // Tipagem explícita dos parâmetros do reduce
  const total = itensDoCarrinho.reduce((acc: number, item: typeof itensDoCarrinho[0]) => 
    acc + item.preco * item.quantidade, 0);

  const handleFinalizarCompra = () => {
    alert('Compra finalizada com sucesso!');
  };

  return (
    <div className="container mx-auto my-4">
      <h2>Checkout</h2>
      <ul>
        {itensDoCarrinho.map((item) => (
          <li key={item.id} className="border p-4 mb-2">
            <p>{item.nomeProduto} - {item.quantidade}x</p>
            <p>Preço: R$ {item.preco.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <h3>Total: R$ {total.toFixed(2)}</h3>
      <button onClick={handleFinalizarCompra} className="bg-green-500 text-white p-2 mt-4">
        Finalizar Compra
      </button>
    </div>
  );
};

export default Checkout;

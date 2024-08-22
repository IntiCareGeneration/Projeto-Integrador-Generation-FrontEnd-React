import React from 'react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { useCarrinho } from '../../../contexts/CarrinhoContext';

interface CardProdutoProps {
  post: Produto;
}

function CardProduto({ post }: CardProdutoProps) {
  const { adicionarAoCarrinho } = useCarrinho();

  const handleAddToCart = () => {
    const itemCarrinho = {
      id: post.id,
      nomeProduto: post.nomeProduto,
      descricao: post.descricao,
      preco: post.preco,
      quantidade: 1,  // Definindo a quantidade inicial como 1
      categoriaModel: post.categoriaModel,
      usuarioModel: null,  // Modifique conforme necessário
    };
    adicionarAoCarrinho(itemCarrinho);
  };

  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{post.nomeProduto}</h4>
          <p>{post.descricao}</p>
          <p>Preço: R$ {post.preco.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex">
        <button
          onClick={handleAddToCart}
          className="w-full text-white bg-green-500 hover:bg-green-700 flex items-center justify-center py-2"
        >
          Adicionar ao Carrinho
        </button>
        <Link to={`/editarProduto/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
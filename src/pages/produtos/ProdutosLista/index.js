import React from "react";

import "./styledProdutosLista.css";

import { AiFillEdit } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

const ProdutosListagem = ({ data, handleDelete }) => {
  return (
    <>
      <div className="card">
        <div className="head">
          <h4>{data.nome_produto}</h4>
          <span>Marca: {data.marca_produto}</span>
        </div>
        <div className="med">
          <p>Preço: R${data.preco_produto}</p>
          <span>Estoque: {data.quantidade_produto}</span>
        </div>
        <div className="bottom">
          <a href={"/produtos/cadastro/editar/" + data._id} className="editar">
            <AiFillEdit className="edit" />
          </a>
          <button className="excluir">
            <FiTrash2
              className="trash"
              onClick={() => handleDelete(data._id)}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProdutosListagem;

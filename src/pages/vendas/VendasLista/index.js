import React from "react";

import "./styledVendaLista.css";

import { FiTrash2 } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";

import { Link } from "react-router-dom";

const VendaLista = ({ data, handleDelete }) => {
  return (
    <div className="boxListaVenda">
      <div className="cardVenda">
        <div>
          <div>
            Nome da Venda: <p>{data.nome_venda}</p>
          </div>
          <div>
            Produto Vendido: <p>{data.nome_produto_venda}</p>
          </div>
          <div>
            Valor da venda: <p>{data.preco_venda}</p>
          </div>
          <div>
            Quantidade de produto vendido: <p>{data.quantidade_venda}</p>
          </div>
        </div>
        <div className="boxBotoes">
          <div className="error">
            <button>
              <FiTrash2
                className="icon-erro"
                onClick={() => handleDelete(data._id)}
              />
            </button>
          </div>
          <div>
            <a href={"/vendas/cadastro/editar/" + data._id}>
              <AiOutlineEdit className="icon-edit" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendaLista;

import React from "react";

import "./styledClienteLista.css";

import { FiTrash2 } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";

const ClienteListagem = ({ data, handleDelete }) => {
  return (
    <div className="boxCliente">
      <div className="cardCliente">
        <div>
          <div>Nome: {data.nome_cliente}</div>
          <div>Email: {data.email_cliente}</div>
          <div>CPF/CNPJ: {data.cpfcnpj_cliente}</div>
          <div>Endereço: {data.endereco_cliente}</div>
          <div>CEP: {data.cep_cliente}</div>
          <div>Telefone: {data.telefone_cliente}</div>
        </div>
        <div className="boxBotao">
          <div className="error">
            <button onClick={() => handleDelete(data._id)}>
              <FiTrash2 className="icon-erro" />
            </button>
          </div>
          <div className="editar">
            <a href={"/clientes/cadastro/editar/" + data._id}>
              <AiOutlineEdit className="icon-edit" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClienteListagem;

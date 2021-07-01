import React from "react";

import Header from "../../components/header";

import "./styledCliente.css";

const Cliente = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="introCliente">
          <h3>Clientes</h3>
          <a href="/clientes/cadastro">Cadastrar um novo Cliente</a>
        </div>
      </main>
    </div>
  );
};

export default Cliente;

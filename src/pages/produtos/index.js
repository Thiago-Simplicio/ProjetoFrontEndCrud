import React from "react";

import Header from "../../components/header";

import "./styledProdutos.css";

const Produtos = () => {
  return (
    <div>
      <Header />
      <main className="containerProdutos">
        <div>
          <h3>Painel de produtos</h3>
          <a href="/produtos/cadastro">Entrar No Painel de Produtos</a>
        </div>
      </main>
    </div>
  );
};

export default Produtos;

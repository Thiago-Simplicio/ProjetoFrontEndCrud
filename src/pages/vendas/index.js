import React from "react";

import Header from "..//../components/header";

import "./styledVenda.css";

const Vendas = () => {
  return (
    <>
      <Header />
      <main>
        <div className="vendasIntro">
          <h3>Vendas</h3>
          <a href="/vendas/cadastro">Entrar no painel de Vendas</a>
        </div>
      </main>
    </>
  );
};

export default Vendas;

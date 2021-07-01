import React, { useState, useEffect } from "react";

import Header from "../../../components/header";

import "./styledVendaCadastro.css";

import api from "..//..//..//services/api";

import VendaLista from "../VendasLista/";

const VendasCadastro = () => {
  const [nome_venda, setNome] = useState("");
  const [nome_produto_venda, setProduto] = useState("");
  const [preco_venda, setPreco] = useState("");
  const [quantidade_venda, setQuantidade] = useState("");
  const [allVenda, setAllVenda] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/venda", {
      nome_venda,
      nome_produto_venda,
      preco_venda,
      quantidade_venda,
    });

    setNome("");
    setProduto("");
    setPreco("");
    setQuantidade("");

    setAllVenda([...allVenda, response.data]);
  }

  useEffect(() => {
    async function getAllVenda() {
      const response = await api.get("/venda");

      setAllVenda(response.data);
    }

    getAllVenda();
  }, []);

  async function handleDelete(id) {
    if (window.confirm("Deseja excluir essa Venda ?")) {
      var resultado = await api.delete("/venda/" + id);
      if (resultado.status === 200) {
        window.location.href = "/vendas/cadastro";
      } else {
        alert("Erro ao excluir a venda");
      }
    }
  }

  return (
    <>
      <Header />
      <div className="containerVendas">
        <div className="boxVenda">
          <h3>Painel de acesso Vendas/cadastro/ações</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nome da Venda</label>
              <input
                onChange={(event) => setNome(event.target.value)}
                value={nome_venda}
              />
            </div>
            <div>
              <label>Nome do Produto</label>
              <input
                onChange={(event) => setProduto(event.target.value)}
                value={nome_produto_venda}
              />
            </div>
            <div>
              <label>Preco da Venda</label>
              <input
                onChange={(event) => setPreco(event.target.value)}
                value={preco_venda}
              />
            </div>
            <div>
              <label>Quantidade da Venda</label>
              <input
                onChange={(event) => setQuantidade(event.target.value)}
                value={quantidade_venda}
              />
            </div>
            <button>Registrar Venda</button>
          </form>
        </div>

        {allVenda.map((data) => (
          <VendaLista data={data} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default VendasCadastro;

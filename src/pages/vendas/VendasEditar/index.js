import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import Header from "../../../components/header";

import "./styledVendaEditar.css";

import api from "..//..//..//services/api";

const VendasEditar = () => {
  const [nome_venda, setNome] = useState("");
  const [nome_produto_venda, setProduto] = useState("");
  const [preco_venda, setPreco] = useState("");
  const [quantidade_venda, setQuantidade] = useState("");
  const [allVenda, setAllVenda] = useState([]);
  const { _idVenda } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api
      .put("/venda/", {
        _id: _idVenda,
        nome_venda,
        nome_produto_venda,
        preco_venda,
        quantidade_venda,
      })
      .then(function () {
        window.location.href = "/vendas/cadastro";
      })
      .catch(function (err) {
        alert("Erro ao editar a Venda");
      });
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

  useEffect(() => {
    async function getVenda() {
      var response = await api.get("/venda/" + _idVenda);

      console.log(response);

      setNome(response.data.nome_venda);
      setProduto(response.data.nome_produto_venda);
      setPreco(response.data.preco_venda);
      setQuantidade(response.data.quantidade_venda);
    }
    getVenda();
  }, []);

  return (
    <>
      <Header />
      <div className="containerVendas">
        <div className="boxVenda">
          <h3>Painel de atualização de venda</h3>
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
            <button>Salvar Venda</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VendasEditar;

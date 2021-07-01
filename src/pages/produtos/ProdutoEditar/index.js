import React, { useState, useEffect, setValues } from "react";

import { useParams } from "react-router";

import Header from "../../../components/header";

import api from "../../../services/api";

const ProdutosEditar = () => {
  const [nome_produto, setNomeProduto] = useState("");
  const [quantidade_produto, setQuantidadeProduto] = useState("");
  const [preco_produto, setPrecoProduto] = useState("");
  const [marca_produto, setMarcaProduto] = useState("");
  const [allProdutos, setAllProdutos] = useState([]);
  const { _idProduto } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api
      .put("/produto/", {
        _id: _idProduto,
        nome_produto,
        quantidade_produto,
        preco_produto,
        marca_produto,
      })
      .then(function () {
        window.location.href = "/produtos/cadastro";
      })
      .catch(function (error) {
        alert("Erro ao atualizar os dados do produto");
      });
  }

  useEffect(() => {
    async function getAllProdutos() {
      const response = await api.get("/produto");

      setAllProdutos(response.data);
    }

    getAllProdutos();
  }, []);

  async function handleDelete(id) {
    if (window.confirm("Tem certeza que deseja exlucir esse produto")) {
      var resultado = await api.delete("/produto/" + id);
      if (resultado.status === 200) {
        window.location.href = "/produtos/cadastro";
      } else {
        alert("Ocorreu um Erro, tente novamente");
      }
    }
  }

  useEffect(() => {
    async function getProduto() {
      var response = await api.get("/produto/" + _idProduto);
      console.log(response);

      setNomeProduto(response.data.nome_produto);
      setQuantidadeProduto(response.data.quantidade_produto);
      setPrecoProduto(response.data.preco_produto);
      setMarcaProduto(response.data.marca_produto);
    }
    getProduto();
  }, []);

  return (
    <>
      <Header />
      <div className="mainProdutos">
        <h3>Painel de atualização de produtos</h3>
        <form className="formProdutos" onSubmit={handleSubmit}>
          <div className="boxFieldProdutos">
            <label>Nome do Produto</label>
            <input
              onChange={(event) => setNomeProduto(event.target.value)}
              className="produto"
              value={nome_produto}
              type="text"
            />
          </div>
          <div className="boxFieldProdutos">
            <label>Quantidade do Produto</label>
            <input
              onChange={(event) => setQuantidadeProduto(event.target.value)}
              value={quantidade_produto}
              className="quantidade"
              type="text"
            />
          </div>
          <div className="boxFieldProdutos">
            <label>Preço do Produto</label>
            <input
              onChange={(event) => setPrecoProduto(event.target.value)}
              value={preco_produto}
              className="preco"
              type="text"
            />
          </div>
          <div className="boxFieldProdutos">
            <label>Marca do Produto</label>
            <input
              onChange={(event) => setMarcaProduto(event.target.value)}
              value={marca_produto}
              className="marca"
              type="text"
            />
          </div>
          <button type="submit">Salvar Produto</button>
        </form>
      </div>
    </>
  );
};

export default ProdutosEditar;

import React, { useState, useEffect } from "react";

import Header from "../../../components/header";

import "./styledProdutosCadastro.css";

import api from "../../../services/api";

import ProdutosListagem from "../ProdutosLista";

const ProdutosCadastro = () => {
  const [nome_produto, setNomeProduto] = useState("");
  const [quantidade_produto, setQuantidadeProduto] = useState("");
  const [preco_produto, setPrecoProduto] = useState("");
  const [marca_produto, setMarcaProduto] = useState("");
  const [allProdutos, setAllProdutos] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/produto", {
      nome_produto,
      quantidade_produto,
      preco_produto,
      marca_produto,
    });

    setNomeProduto("");
    setQuantidadeProduto("");
    setPrecoProduto("");
    setMarcaProduto("");

    setAllProdutos([...allProdutos, response.data]);
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

  return (
    <>
      <Header />
      <div className="mainProdutos">
        <h3>Painel de acesso Produtos/cadastro/ações</h3>
        <form className="formProdutos" onSubmit={handleSubmit}>
          <div className="boxFieldProdutos">
            <label>Nome do Produto</label>
            <input
              onChange={(event) => setNomeProduto(event.target.value)}
              value={nome_produto}
              className="produto"
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
      <div className="produtosGalery">
        {allProdutos.map((data) => (
          <ProdutosListagem data={data} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default ProdutosCadastro;

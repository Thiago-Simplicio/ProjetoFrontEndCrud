import React, { useEffect, useState } from "react";

import Header from "../../../components/header";

import { useParams } from "react-router";

import api from "..//..//..//services/api";

const ClienteEditar = () => {
  const [nome_cliente, setNome] = useState("");
  const [email_cliente, setEmail] = useState("");
  const [cpfcnpj_cliente, setcpfcnpj] = useState("");
  const [endereco_cliente, setEndereco] = useState("");
  const [cep_cliente, setCep] = useState("");
  const [telefone_cliente, setTefelone] = useState("");
  const [allCliente, setAllCliente] = useState([]);

  const { _idCliente } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api
      .put("/cliente/", {
        _id: _idCliente,
        nome_cliente,
        email_cliente,
        cpfcnpj_cliente,
        endereco_cliente,
        cep_cliente,
        telefone_cliente,
      })
      .then(function () {
        window.location.href = "/clientes/cadastro";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    async function getAllCliente() {
      const response = await api.get("/cliente");

      setAllCliente(response.data);
    }

    getAllCliente();
  }, []);

  async function handleDelete(id) {
    if (window.confirm("Tem certeza que deseja excluir esse Cliente")) {
      var resultado = await api.delete("/cliente/" + id);
      if (resultado.status === 200) {
        window.location.href = "/clientes/cadastro";
      } else {
        alert("Ocorreu um Erro, Por Favor tente novamnete");
      }
    }
  }

  useEffect(() => {
    async function getClienteEdit() {
      var response = await api.get("/cliente/" + _idCliente);

      console.log(response);

      setNome(response.data.nome_cliente);
      setEmail(response.data.email_cliente);
      setcpfcnpj(response.data.cpfcnpj_cliente);
      setEndereco(response.data.endereco_cliente);
      setCep(response.data.cep_cliente);
      setTefelone(response.data.telefone_cliente);
    }
    getClienteEdit();
  }, []);

  return (
    <>
      <Header />
      <div className="boxForm">
        <h3 className="h3">Atualizar dados de Cliente</h3>
        <form onSubmit={handleSubmit} className="form">
          <div className="boxField">
            <label>Nome</label>

            <input
              className="nome"
              onChange={(event) => setNome(event.target.value)}
              type="text"
              value={nome_cliente}
              placeholder="Nome Completo"
            />
          </div>
          <div className="boxField">
            <label>Email</label>
            <input
              className="email"
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              value={email_cliente}
              placeholder="Email"
            />
          </div>
          <div className="boxField">
            <label>CPF/CNPJ</label>
            <input
              className="cpfcnpj"
              onChange={(event) => setcpfcnpj(event.target.value)}
              type="text"
              placeholder="cpfcnpj"
              value={cpfcnpj_cliente}
              minLength={8}
            />
          </div>
          <div className="boxField">
            <label>endereco</label>
            <input
              className="endereco"
              onChange={(event) => setEndereco(event.target.value)}
              type="text"
              value={endereco_cliente}
              placeholder="Rua:"
            />
          </div>
          <div className="boxField">
            <label>CEP</label>
            <input
              className="cep"
              onChange={(event) => setCep(event.target.value)}
              type="text"
              value={cep_cliente}
              placeholder="00.000.000"
            />
          </div>
          <div className="boxField">
            <label>Telefone</label>
            <input
              className="telefone"
              onChange={(event) => setTefelone(event.target.value)}
              type="text"
              value={telefone_cliente}
              placeholder="(00)00000-0000"
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
};

export default ClienteEditar;

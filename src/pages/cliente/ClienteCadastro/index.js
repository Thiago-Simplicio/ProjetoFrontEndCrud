import React, { useEffect, useState, setValues } from "react";

import Header from "../../../components/header";

import api from "..//..//..//services/api";

import ClienteListagem from "../ClientesLista";

import { CgScrollV } from "react-icons/cg";

import "./styledClienteCadastro.css";

const ClienteCadastro = ({ id }) => {
  const [nome_cliente, setNome] = useState("");
  const [email_cliente, setEmail] = useState("");
  const [cpfcpnj_cliente, setcpfcpnj] = useState("");
  const [endereco_cliente, setEndereco] = useState("");
  const [cep_cliente, setCep] = useState("");
  const [telefone_cliente, setTefelone] = useState("");
  const [allCliente, setAllCliente] = useState([]);
  console.log(id);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/cliente", {
      nome_cliente,
      email_cliente,
      cpfcpnj_cliente,
      endereco_cliente,
      cep_cliente,
      telefone_cliente,
    });

    setNome("");
    setEmail("");
    setcpfcpnj("");
    setEndereco("");
    setCep("");
    setTefelone("");

    setAllCliente([...allCliente, response.data]);
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

  return (
    <>
      <Header />
      <div className="boxForm">
        <h3 className="h3">Formulario para cadastrar cliente</h3>
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
              className="cpfcpnj"
              onChange={(event) => setcpfcpnj(event.target.value)}
              type="text"
              value={cpfcpnj_cliente}
              placeholder="cpf/cnpj"
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
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      <div className="containerClientes">
        <div className="headCliente">
          <h4>Lista de Clientes</h4>
          <div className="scroll">
            <CgScrollV className="scroll" />
          </div>
        </div>
        {allCliente.map((data) => (
          <ClienteListagem data={data} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default ClienteCadastro;

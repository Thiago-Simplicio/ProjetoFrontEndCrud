import React, { useState } from "react";

import "./styledLogin.css";

import api from "../../../services/api";

import { login, setIdUsuario } from "..//../..//services/auth";

const Login = () => {
  const [email_usuario, setEmail] = useState("");
  const [senha_usuario, setSenha] = useState("");

  async function handleSubmit() {
    await api.post("/login", { email_usuario, senha_usuario }).then((resp) => {
      if (resp.status === 200) {
        if (resp.data.status === 1) {
          login(resp.data.token);
          setIdUsuario(resp.data.id_cliente);
          window.location.href = "/";
        } else {
          alert("Senha ou Email não conferem");
        }
      } else {
        alert("Erro no servidor");
      }
    });
  }

  return (
    <div className="main">
      <div className="boxLogin">
        <h2>Tela de acesso</h2>
        <div className="formLogin">
          <div>
            <input
              placeholder="Email"
              value={email_usuario}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Senha"
              value={senha_usuario}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>
          <div className="botaoLogin">
            <button onClick={handleSubmit} className="login">
              Login
            </button>
            <a href={"/cadastrar"} className="cadastro">
              cadastrar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

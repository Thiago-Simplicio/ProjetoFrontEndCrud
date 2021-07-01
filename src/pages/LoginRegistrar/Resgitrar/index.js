import React, { useState } from "react";
import api from "../../../services/api";

const Cadastro = () => {
  const [email_usuario, setEmail] = useState("");
  const [senha_usuario, setSenha] = useState("");

  async function CadastroLogin() {
    const response = await api.post("/cadastrar", {
      email_usuario,
      senha_usuario,
    });
    if (response.status === 200) {
      window.location.href = "/login";
    } else {
      alert("Erro ao cadastrar o usuario, reveja os campos obrigatorios");
    }
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
            <button onClick={CadastroLogin} className="login">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;

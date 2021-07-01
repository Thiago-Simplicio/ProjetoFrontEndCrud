import React from "react";
import { getToken, logout } from "../../services/auth";
import api from "../../services/api";

import "./styledHeader.css";

const Header = () => {
  function handleMenuMobile() {
    var menu = document.querySelector(".menu");
    if (menu.className === "menu") {
      menu.className += " menu-mobile";
    } else {
      menu.className = "menu";
    }
  }

  async function confirmSair() {
    if (window.confirm("Deseja realmente sair do sistema?")) {
      const response = await api.get("/destroyToken", {
        headers: { token: getToken() },
      });
      if (response.status === 200) {
        logout();
        window.location.href = "/login";
      } else {
        alert("Não foi possivel fazer o logout");
      }
    }
  }

  return (
    <header>
      <span>developer</span>
      <nav>
        <ul className="menu">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
          <li>
            <a href="/clientes">Clientes</a>
          </li>
          <li>
            <a href="/vendas">Vendas</a>
          </li>
          <li>
            <a href="/vendas" onClick={confirmSair}>
              Sair
            </a>
          </li>
        </ul>
      </nav>
      <div className="hamburguer" onClick={handleMenuMobile}>
        <div className="linha"></div>
        <div className="linha"></div>
        <div className="linha"></div>
      </div>
    </header>
  );
};

export default Header;

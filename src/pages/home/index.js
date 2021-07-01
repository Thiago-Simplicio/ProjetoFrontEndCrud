import React from "react";

import "./styledHome.css";

import Header from "../../components/header";

const Home = () => {
  return (
    <div className="app">
      <Header />
      <div className="banner">
        <div className="text">
          <h2>Bem vindo ao Projeto</h2>
          <span>web developer / thiago simplicio</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

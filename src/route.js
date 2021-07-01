import React from "react";

import { Router, Switch, Route } from "react-router";

import Home from "./pages/home";

import Cliente from "./pages/cliente";
import ClienteCadastro from "./pages/cliente/ClienteCadastro";
import ClienteEditar from "./pages/cliente/ClienteEditar";

import Produtos from "./pages/produtos";
import ProdutosCadastro from "./pages/produtos/ProdutosCadastro/indes";
import ProdutosEditar from "./pages/produtos/ProdutoEditar";

import Vendas from "./pages/vendas";
import VendasCadastro from "./pages/vendas/VendasCadastro";
import VendasEditar from "./pages/vendas/VendasEditar";

import Login from "./pages/LoginRegistrar/Login";
import Cadastro from "./pages/LoginRegistrar/Resgitrar";

import { history } from "./history";

import PrivateRoute from "./services/wAuth";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/cadastrar" exact component={Cadastro} />

        <PrivateRoute path="/" exact component={Home} />

        <Route path="/produtos" exact component={Produtos} />
        <Route path="/produtos/cadastro" exact component={ProdutosCadastro} />
        <Route
          path="/produtos/cadastro/editar/:_idProduto"
          exact
          component={ProdutosEditar}
        />

        <Route path="/clientes" exact component={Cliente} />
        <Route path="/clientes/cadastro" exact component={ClienteCadastro} />
        <Route
          path="/clientes/cadastro/editar/:_idCliente"
          exact
          component={ClienteEditar}
        />

        <Route path="/vendas" exact component={Vendas} />
        <Route path="/vendas/cadastro" exact component={VendasCadastro} />
        <Route
          path="/vendas/cadastro/editar/:_idVenda"
          exact
          component={VendasEditar}
        />
      </Switch>
    </Router>
  );
};

export default Routes;

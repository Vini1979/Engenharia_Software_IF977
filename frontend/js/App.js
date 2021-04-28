import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import configureStore from './store';
import SentryBoundary from './utils/SentryBoundary';
import { Switch, BrowserRouter, Route } from "react-router-dom";

import ListarEquipamentos from "./pages/listarEquipamentos/listarEquipamentos";
import ListarFuncionarios from "./pages/listarFuncionarios/listarFuncionarios";
import CadastrarRelacao from "./pages/cadastrarRelacoes/cadastro";

const store = configureStore({});
const App = () => (
  <SentryBoundary>
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/listar-equipamentos" component={ListarEquipamentos} />
        <Route path="/listarFuncionarios" component={ListarFuncionarios} />
        <Route path="/cadastrarRelacao" component={CadastrarRelacao} />
      </Switch>
    </BrowserRouter>
    </Provider>
  </SentryBoundary>
);

export default hot(App);

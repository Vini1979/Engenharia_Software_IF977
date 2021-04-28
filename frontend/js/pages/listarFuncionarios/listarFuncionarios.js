import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Container, Header, AsideContainer, Main } from "./styles";
import SideBar from "../../components/sideBar/sideBar";

import Funcionarios from "../../components/funcionarios/funcionarios";

class ListarFuncionarios extends Component {
  render() {
    return (
      <Container>
        <AsideContainer>
          <SideBar />
        </AsideContainer>
        <Header>
          <h1>Listagem de Funcionários</h1>
        </Header>

        <Main>
          <Funcionarios/>
        </Main>
      </Container>
    );
  }
}

export default ListarFuncionarios;

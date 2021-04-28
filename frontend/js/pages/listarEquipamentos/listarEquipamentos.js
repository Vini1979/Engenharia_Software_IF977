import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Header, AsideContainer, Main } from "./styles";
import SideBar from "../../components/sideBar/sideBar";
import EquipCateg from "../../components/equipCateg/equipCateg";

class ListarEquipamentos extends Component {
  render() {
    return (
      <Container>
        <AsideContainer>
          <SideBar />
        </AsideContainer>
        <Header>
          <h1>Listagem de Equipamentos</h1>
        </Header>

        <Main>
          <EquipCateg />
        </Main>
      </Container>
    );
  }
}

export default ListarEquipamentos;

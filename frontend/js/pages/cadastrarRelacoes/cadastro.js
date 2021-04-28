import React, { Component } from "react";

import { Container, Header, AsideContainer, Main, Form } from "./styles";
import SideBar from "../../components/sideBar/sideBar";
import Input from "../../components/utils/utils";

class CadastrarRelacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
        cadastros: [
        {
            nome: "Nome1",
            matricula: "",
            equipamento: "",
            especificações: "",
            serie: "",
            marca: "",
            setor: "",
            dataRetira: "",
            dataEntrega: ""
        }
        ]
    };
}
  render() {
    return (
      <Container>
        <AsideContainer>
          <SideBar />
        </AsideContainer>
        <Header>
          <h1>Cadastrar Relacões</h1>
        </Header>

        <Main>
          <Form>
            <Input type="text" text="Nome" />
            <Input type="text" text="Matricula" />
            <Input type="text" text="Equipamento" />
            <Input type="text" text="Especificações" />
            <Input type="text" text="Número de Serie" />
            <Input type="text" text="Marca" />
            <Input type="text" text="Setor" />
            <Input type="date" text="Data da retira" />
            <Input type="date" text="Data da entrega" />
          </Form>
          <button>Salvar</button>
        </Main>
      </Container>
    );
  }
}

export default CadastrarRelacao;

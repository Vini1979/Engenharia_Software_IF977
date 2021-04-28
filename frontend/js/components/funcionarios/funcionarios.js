import React, { Component } from "react";

import { Container, ContainerInter, Title } from "./styles";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import FuncTable from "../funcTable/funcionarios";

class Funcionarios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      funcionarios: [
        { seqfuncionario: 1, nome: "Pedro", endereco: "Rua1", detailsOpen: true },
        {
          seqfuncionario: 2,
          nome: "Victoria",
          endereco: "Rua2",
          detailsOpen: false
        },
        {
          seqfuncionario: 3,
          nome: "Vinícius",
          endereco: "Rua3",
          detailsOpen: true
        }
      ]
    };
  }

  toggleDetailsOpen(index){
    let funcionarios = [...this.state.funcionarios];
    let detailValue = funcionarios[index].detailsOpen;
    funcionarios[index] = {
      ...funcionarios[index],
      detailsOpen: !detailValue
    };
    this.setState({ funcionarios });
  };

  render() {
    return (
      <Container>
        {this.state.funcionarios.map((funcionario, index) => (
          <ContainerInter>
            <Title onClick={() => this.toggleDetailsOpen(index)} key={index}>
              {this.state.funcionarios[index].detailsOpen ? (
                <FiChevronDown />
              ) : (
                <FiChevronRight />
              )}
              <h1>{funcionario.nome}</h1>
            </Title>
            {this.state.funcionarios[index].detailsOpen ? <FuncTable /> : <></>}
          </ContainerInter>
        ))}
      </Container>
    );
  }
}

export default Funcionarios;

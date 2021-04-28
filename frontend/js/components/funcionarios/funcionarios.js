import axios from 'axios';

import React, { Component } from "react";

import { Container, ContainerInter, Title } from "./styles";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import FuncTable from "../funcTable/funcionarios";

class Funcionarios extends Component {

  async componentDidMount() {
    axios
      .get(`/api/people`)
      .then((response) => {
        console.log(response);
        this.setState({ funcionarios: response.data.results });
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      funcionarios: []
    };
  }

  render() {
    if (!this.state.funcionarios) {
      return 'Loading'
    }
    return (
      <Container>
        {this.state.funcionarios.map((funcionario, index) => (
          <ContainerInter>
            <Title key={index}>
                <FiChevronDown />
              <h1>{funcionario.name}</h1>
            </Title>
            <FuncTable funcionario={funcionario.name} />
          </ContainerInter>
        ))}
      </Container>
    );
  }
}

export default Funcionarios;

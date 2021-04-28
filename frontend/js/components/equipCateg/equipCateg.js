import axios from 'axios';
import React, { Component } from "react";

import { Container, ContainerInter, Title } from "./styles";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import EquipTable from "../equipTable/equipment";

class EquipCateg extends Component {
  async componentDidMount() {
    axios
    .get(`/api/equipments`)
    .then((response) => {
      this.setState({ equipments: response.data.results });
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }
  constructor(props) {
      super(props);
      this.state = {
        equipments: []
      }
  };

  render() {
    if(!this.state.equipments){
      return 'loading'
    }
    return (
      <Container>
        {this.state.equipments.map((equipments, index) => (
          <ContainerInter>
            <Title key={index}>
              {this.state.equipments[index].detailsOpen ? (
                <FiChevronDown />
              ) : (
                <FiChevronRight />
              )}
              <h1>{equipments.name}</h1>
            </Title>
              <EquipTable categ={equipments.name} />
          </ContainerInter>
        ))}
      </Container>
    );
  }
}

export default EquipCateg;

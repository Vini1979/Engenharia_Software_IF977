import React, { Component } from "react";

import { Container, ContainerInter, Title } from "./styles";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import EquipTable from "../equipTable/equipment";

class EquipCateg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipCateg: [
            { id: 1, categ: "Cadeiras", detailsOpen: true },
            { id: 2, categ: "Mesas", detailsOpen: false },
            { id: 3, categ: "Notebooks", detailsOpen: false },
            { id: 4, categ: "Desktops", detailsOpen: false },
            { id: 5, categ: "Cadeiras", detailsOpen: true },
            { id: 6, categ: "Mesas", detailsOpen: false },
            { id: 7, categ: "Notebooks", detailsOpen: false },
            { id: 8, categ: "Desktops", detailsOpen: false },
            { id: 9, categ: "Cadeiras", detailsOpen: true },
            { id: 10, categ: "Mesas", detailsOpen: false },
            { id: 11, categ: "Notebooks", detailsOpen: false },
            { id: 12, categ: "Desktops", detailsOpen: false }
            ]
        }
    };

  toggleDetailsOpen(index) {
    let equipCateg = [...this.state.equipCateg];
    let detailValue = equipCateg[index].detailsOpen;
    equipCateg[index] = {
      ...equipCateg[index],
      detailsOpen: !detailValue
    };
    this.setState({ equipCateg });
  };

  render() {
    return (
      <Container>
        {this.state.equipCateg.map((title, index) => (
          <ContainerInter>
            <Title onClick={() => this.toggleDetailsOpen(index)} key={index}>
              {this.state.equipCateg[index].detailsOpen ? (
                <FiChevronDown />
              ) : (
                <FiChevronRight />
              )}
              <h1>{title.categ}</h1>
            </Title>
            {this.state.equipCateg[index].detailsOpen ? (
              <EquipTable categ={title.categ} />
            ) : (
              <></>
            )}
          </ContainerInter>
        ))}
      </Container>
    );
  }
}

export default EquipCateg;

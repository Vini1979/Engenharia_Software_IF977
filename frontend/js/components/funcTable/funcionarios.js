import axios from 'axios';

import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const rows = [
  {
    seqfuncionaio: "",
    category: "Notebooks",
    code: "10002",
    seriesNumber: "1011",
    maker: "LENOVO",
    specifications: "i5 - 8GB RAM - SSD 240",
    state: "Ótimo",
    dateRegister: "10/12/2020",
    dateDevolution: "05/02/2021"
  },
  {
    seqfuncionaio: "",
    category: "Notebooks",
    code: "10002",
    seriesNumber: "1011",
    maker: "LENOVO",
    specifications: "i5 - 8GB RAM - SSD 240",
    state: "Ótimo",
    dateRegister: "10/12/2020",
    dateDevolution: "05/02/2021"
  }
];

class FuncTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: []
    };    
}
  async componentDidMount() {
    axios
      .get(`/api/items`)
      .then((response) => {
        this.setState({ items: response.data.results });
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const {items} = this.state
    const {funcionario} = this.props
    
    return (
      <TableContainer component={Paper}>
        <Table
          style={{
            minWidth: 600
          }}
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Categoria do Item</TableCell>
              <TableCell align="center">Código</TableCell>
              <TableCell align="center">Número de Série</TableCell>
              <TableCell align="center">Marca</TableCell>
              <TableCell align="center">Especificações</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center">Data de Registro</TableCell>
              <TableCell align="center">Data de Devolução</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => {
              if (row.person === funcionario) {
                return (
                  <TableRow key={row.name}>
                    <TableCell align="center">{row.kind}</TableCell>
                    <TableCell align="center">{row.code}</TableCell>
                    <TableCell align="center">{row.series_number}</TableCell>
                    <TableCell align="center">{row.brand}</TableCell>
                    <TableCell align="center">{row.specifications}</TableCell>
                    <TableCell align="center">{row.state}</TableCell>
                    <TableCell align="center">{row.registered_date}</TableCell>
                    <TableCell align="center">{row.return_date}</TableCell>
                  </TableRow>
                )
              }
              })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default FuncTable;
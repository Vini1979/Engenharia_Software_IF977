import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const rows = [
  {
    code: "10001",
    seriesNumber: 1010,
    maker: "DELL",
    specifications: "i5 - 8GB RAM - SSD 240",
    state: "Bom",
    functionary: "Pedro",
    dateRegister: "10/02/2021",
    dateDevolution: "12/04/2021"
  },
  {
    code: "10001",
    seriesNumber: 1010,
    maker: "DELL",
    specifications: "i5 - 8GB RAM - SSD 240",
    state: "Bom",
    functionary: "Pedro",
    dateRegister: "10/02/2021",
    dateDevolution: "12/04/2021"
  },
  {
    code: "10001",
    seriesNumber: 1010,
    maker: "DELL",
    specifications: "i5 - 8GB RAM - SSD 240",
    state: "Bom",
    functionary: "Pedro",
    dateRegister: "10/02/2021",
    dateDevolution: "12/04/2021"
  },
  {
    code: "10001",
    seriesNumber: 1010,
    maker: "DELL",
    specifications: "i5 - 8GB RAM - SSD 240",
    state: "Bom",
    functionary: "Pedro",
    dateRegister: "10/02/2021",
    dateDevolution: "12/04/2021"
  },
  {
    code: "10001",
    seriesNumber: 1010,
    maker: "DELL",
    specifications: "i5 - 8GB RAM - SSD 240",
    state: "Bom",
    functionary: "Pedro",
    dateRegister: "10/02/2021",
    dateDevolution: "12/04/2021"
  }
];

export default function EquipTable() {
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
            <TableCell align="center">Código</TableCell>
            <TableCell align="center">Número de Série</TableCell>
            <TableCell align="center">Marca</TableCell>
            <TableCell align="center">Especificações</TableCell>
            <TableCell align="center">Estado</TableCell>
            <TableCell align="center">Funcionário</TableCell>
            <TableCell align="center">Data de Registro</TableCell>
            <TableCell align="center">Data de Devolução</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.code}</TableCell>
              <TableCell align="center">{row.seriesNumber}</TableCell>
              <TableCell align="center">{row.maker}</TableCell>
              <TableCell align="center">{row.specifications}</TableCell>
              <TableCell align="center">{row.state}</TableCell>
              <TableCell align="center">{row.functionary}</TableCell>
              <TableCell align="center">{row.dateRegister}</TableCell>
              <TableCell align="center">{row.dateDevolution}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

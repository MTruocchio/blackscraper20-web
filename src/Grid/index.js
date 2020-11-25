import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, title, site, url, target, preco) {
  return { id, title, site, url, target, preco };
}

const rows = [
  createData(1,'Ryzen 5 3600', 'Kabum', 'http://www.google.com', 1700, 2000),
  createData(2,'Ryzen 5 3600', 'Pichau', 'http://www.google.com', 1700, 2000),
  createData(3,'Ryzen 5 3600', 'Terabyte', 'http://www.google.com', 1700, 2000),
  createData(4,'Stell Legend', 'Kabum', 'http://www.google.com', 1700, 2000),
  createData(5,'Stell Legend', 'Pichau', 'http://www.google.com', 1700, 2000),
  
];

export default function Grid() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Site</TableCell>
            <TableCell align="left">Preco</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell ><a target='_blanc'href={row.url}>{row.title}</a></TableCell>
              <TableCell align="center">{row.site}</TableCell>
              <TableCell align="left">{row.preco}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

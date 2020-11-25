import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../services/api'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Grid = () => {

  const [items, setItems] = useState([])

  useEffect(() =>{
    api.get('pesquisas').then(response =>{
      setItems(response.data.data)
    })
  },[])

  async function handleDeleteItem(event){
    
    console.log(event)
    //await api.delete('pesquisas/',event.target.id)
    //alert(`item removido a`)
  }

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Site</TableCell>
            <TableCell align="right">Preco</TableCell>
            <TableCell align="right">Target</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((itemRow) =>(
            <TableRow key={itemRow.id}>
              <TableCell ><a target='_blanc'href={itemRow.url}>{itemRow.title}</a></TableCell>
              <TableCell align="center">{itemRow.site}</TableCell>
              <TableCell align="right">{itemRow.target}</TableCell>
              <TableCell align="right">{itemRow.target}</TableCell>
          <TableCell align="right"><DeleteIcon id={itemRow.id} onClick={handleDeleteItem}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Grid
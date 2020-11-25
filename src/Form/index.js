import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));
  
const Form  = () => {
  const classes = useStyles();
  return (
    <div id="form" className="form" >
      
      <TextField
          id="url"
          label="Url"
          style={{ margin: 8 }}
          placeholder="informe a url do produto"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Title"
          id="title"
          placeholder="title"
          className={classes.textField}
        />
        <TextField
          label="Selector"
          id="selector"
          placeholder="Informe o seletor css"
          className={classes.textField}
          style={{width:"400px"}}
          wi
        />
        <TextField
          label="Target R$"
          id="target"
          placeholder="informe o valor alvo"
          className={classes.textField}          
        />
        <br />
        <br />
        <Button color="primary">Adicionar a lista</Button>
    </div>
  );
}
export default Form

  
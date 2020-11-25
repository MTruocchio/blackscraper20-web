import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import api from '../services/api'

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

  const [formData, setFormData] = useState({
    url : '',
    site : '',
    title : '',
    selector: '', 
    target :'' 
  })
  
  function handleInputChange(event){
    const{id, value} = event.target
    setFormData({...formData, [id]: value})
  }

  async function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
    await api.post('pesquisas',formData)
    alert(`item ${formData.title} incluido a lista de buscas`)
  }

  return (
    <div id="form" className="form" >
      <fieldset>
        <form onSubmit={handleSubmit}>
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
          onChange={handleInputChange}
        />
        <TextField
          label="Title"
          id="title"
          placeholder="title"
          className={classes.textField}
          onChange={handleInputChange}
        /> 
        <TextField
        label="Site"
        id="site"
        placeholder="site"
        className={classes.textField}
        onChange={handleInputChange}
        />
        <TextField
          label="Selector"
          id="selector"
          placeholder="Informe o seletor css"
          className={classes.textField}
          style={{width:"400px"}}
          onChange={handleInputChange}
        />
        <TextField
          label="Target R$"
          id="target"
          placeholder="informe o valor alvo"
          className={classes.textField}    
          type="Number"      
          onChange={handleInputChange}
        />
        <br />
        <br />  
        <Button type="submit" color="primary">Adicionar a lista</Button>
        </form>
      </fieldset>
    
    </div>
  );
}
export default Form

  
import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import {validarCPF, validarSenha} from './models/cadastro';
import ValidacoesDeCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
        <ValidacoesDeCadastro.Provider value={{cpf: validarCPF, senha: validarSenha}}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesDeCadastro.Provider>
        
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;

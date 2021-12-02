import React, {useState, useContext} from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core/";
import ValidacoesDeCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({aoEnviar}){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const validacoes = useContext(ValidacoesDeCadastro);
    const [erros, validarCampos, possoEnviarFormulario] = useErros(validacoes);
    
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviarFormulario()){
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
            }            
        }}>
        <TextField 
            value={nome}
            onChange={event => {             
                setNome(event.target.value);
            }}
            variant="outlined"
            margin="normal"
            id="nome"
            name="nome"
            label="Nome"
            fullWidth
        />
        <TextField
            value={sobrenome}
            onChange={event => {
                setSobrenome(event.target.value);
            }}
            variant="outlined"
            margin="normal"
            id="sobrenome"
            name="sobrenome"
            label="Sobrenome"
            fullWidth
        />
        <TextField
            value={cpf}
            onChange={(event) => {
                setCpf(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            variant="outlined"
            margin="normal"
            id="cpf"
            name="cpf"
            label="CPF"
            fullWidth
        />
        <FormControlLabel 
            label="Promoções"
            control={
                <Switch
                    checked={promocoes}
                    onChange={(event) => {
                    setPromocoes(event.target.checked);
                }}
                name="promocoes" 
                color="primary"
                />
            }
        /> 

        <FormControlLabel
            label="Novidades"
            control={
                <Switch
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked);
                    }}
                    name="novidades"
                    color="primary"
                />}            
        />
        <Button 
            variant="contained"
            color="primary"
            type="submit">
            Próximo
        </Button>
        </form>
    );
}

export default DadosPessoais;
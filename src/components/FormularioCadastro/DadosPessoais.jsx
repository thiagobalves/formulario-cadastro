import React, {useState} from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core/";

function DadosPessoais({aoEnviar, validarCPF}){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf:{valido: true, texto: ""}})
    
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
            
        }}>
        <TextField 
            value={nome}
            onChange={event => {             
                setNome(event.target.value);
            }}
            variant="outlined"
            margin="normal"
            id="nome"
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
            label="Sobrenome"
            fullWidth
        />
        <TextField
            value={cpf}
            onChange={(event) => {
                setCpf(event.target.value);
            }}
            onBlur={(event) => {
                const CPFValido = validarCPF(cpf);
                setErros({cpf: CPFValido})
            }}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            variant="outlined"
            margin="normal"
            id="cpf"
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
            Cadastrar
        </Button>
        </form>
    );
}

export default DadosPessoais;
import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesDeCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesDeCadastro);
    const [erros, validarCampos, possoEnviarFormulario] = useErros(validacoes);

    return(
        <form 
            onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviarFormulario()){
                aoEnviar({email, senha});
            }
        }}>
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
                name="email"
                label="E-mail"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto} 
                id="senha"
                name="senha"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <Button 
                type="submit"
                variant="contained"
                color="primary">
                Próximo
            </Button>
                
        </form>
    );
}

export default DadosUsuario;
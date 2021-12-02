import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar}){
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});
    useEffect(()=>{
        if(etapaAtual === formularios.length -1){
            aoEnviar(dadosColetados);
        }
    })
    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />, 
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5" align="center">Obrigado pelo cadastro!</Typography>
    ];

    function coletarDados(dados){
        setDadosColetados({...dadosColetados, ...dados})
        proximaEtapa();
    }

    function proximaEtapa(){
        setEtapaAtual(etapaAtual+1);
    }

    return(
        <Fragment>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Dados Pessoais</StepLabel></Step>
                <Step><StepLabel>Dados entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </Fragment>
    );
}

export default FormularioCadastro;
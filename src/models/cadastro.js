function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido: false, texto: "O CPF deve conter 11 dígitos"}
    } else {
      return {valido: true, texto: ""}
    }
}

function validarSenha(senha){
    if(senha.length < 4 || senha.length > 10){
      return {valido: false, texto: "A senha deve possuir entre 4 e 10 dígitos"}
    } else {
      return {valido: true, texto: ""}
    }
}

export{validarCPF, validarSenha};
function validateCPF(cpf) {
  if(cpf.length !== 11) return {valid: false, text: "O CPF deve ter 11 digítos"}
  else return {valid: true, text: ""}
}

function validatePassword(password) {
    if(password.length < 4 || password.length > 72) return {valid: false, text: "A senha precisa ter mais que 4 digítos e menos que 72"}
    else return {valid: true, text: ""}
}

export { validateCPF, validatePassword }
import './App.css';
import { Form } from './components/Form/Form';
import { Container, Typography } from '@material-ui/core'
import { validateCPF, validatePassword } from './models/register'
import Validations from './contexts/registerValidations';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center">Formulário de Cadastro</Typography>
      <Validations.Provider value={{cpf: validateCPF, password: validatePassword, name: validatePassword}}>
        <Form toSend={toSendForm} />
      </Validations.Provider> 
    </Container>
  );
}

function toSendForm(data) {
  console.log(data)
}

export default App;
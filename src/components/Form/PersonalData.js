import React, { useState, useContext } from 'react'
import {TextField, Button, Switch, FormControlLabel} from '@material-ui/core'
import Validations from '../../contexts/registerValidations'
import useErrors from '../../hooks/useErrors'

export const PersonalData = ({ toSend }) => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [cpf, setCpf] = useState('')
    const [promotions, setPromotions] = useState(true)
    const [newsletter, setNewsletter] = useState(false)
    const validations = useContext(Validations)
    const [errors, validateFields, canSend] = useErrors(validations)

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if(canSend()) {
                toSend({name, lastName, cpf, promotions, newsletter})
            }
        }}>
            <TextField 
            value={name} 
            onChange={e => {setName(e.target.value)}} 
            label="Name"
            onBlur={validateFields}
            error={!errors.name.valid}
            helperText={errors.name.text}
            id="name"
            name="name"
            variant="outlined" 
            margin="normal" 
            fullWidth />
            <TextField
            value={lastName} 
            onChange={e => {setLastName(e.target.value)}}
            label="Last Name"
            id="lastname"
            variant="outlined"
            margin="normal"
            fullWidth />
            <TextField
            onBlur={validateFields} 
            error={!errors.cpf.valid}
            helperText={errors.cpf.text}
            value={cpf} 
            onChange={e => {setCpf(e.target.value)}} 
            label="CPF" 
            id="cpf"
            name="cpf"
            variant="outlined" 
            margin="normal" 
            fullWidth />
            <FormControlLabel label="Promotions" control={<Switch checked={promotions} onChange={e => {setPromotions(e.target.checked)}} name="promotions" color="primary" />} />
            <FormControlLabel label="Newsletter" control={<Switch checked={newsletter} onChange={e => {setNewsletter(e.target.checked)}} name="newsletter" color="primary" />} />
            <Button variant="contained" color="primary" type="submit">
                Next step
            </Button>
        </form>
    )
}
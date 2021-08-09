import { TextField, Button } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import Validations from '../../contexts/registerValidations'
import useErrors from '../../hooks/useErrors'

export const UserData = ({ toSend }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const validations = useContext(Validations)
    const [errors, validateFields, canSend] = useErrors(validations)
    
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if(canSend()) {
                toSend()
            }
        }}>
            <TextField
            value={email} 
            onChange={e => {
                setEmail(e.target.value)
            }}
            onBlur={validateFields}
            required 
            id="email" 
            label="email" 
            type="email" 
            variant="outlined" 
            margin="normal" 
            fullWidth />
            <TextField
            value={password} 
            onChange={e => {
                setPassword(e.target.value)
            }}
            onBlur={validateFields}
            error={!errors.password.valid}
            helperText={errors.password.text}
            name="password"
            required 
            id="password" 
            label="password" 
            type="password" 
            variant="outlined" 
            margin="normal" 
            fullWidth />
            <Button type="submit" variant="contained" color="primary"> Next step  </Button>
        </form>
    )
}

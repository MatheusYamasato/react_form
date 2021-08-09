import { Typography, Stepper, Step, StepLabel } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { AddressData } from './AddressData'
import { PersonalData } from './PersonalData'
import { UserData } from './UserData'

export const Form = ({toSend}) => {
    const [actualStage, setActualStage] = useState(0)
    const [dataCollected, setDataCollected] = useState({})
    useEffect(() => {
        if(actualStage === forms.length) toSend(dataCollected)
    }, )

    const collectData = (data) => {
        setDataCollected({...dataCollected, ...data})
        nextStage()
    }

    const forms = [
        <UserData toSend={collectData} />,
        <PersonalData toSend={collectData}/>,
        <AddressData toSend={collectData} />,
        <Typography variant="h5">Obrigado por se cadastrar </Typography>    
    ]
    const nextStage = () => {
        setActualStage(actualStage + 1)
    }
    
    return (
        <>
            <Stepper activeStep={actualStage}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Personal</StepLabel></Step>
                <Step><StepLabel>Address</StepLabel></Step>
                <Step><StepLabel>Finish</StepLabel></Step>
            </Stepper> 
            {forms[actualStage]}
        </>
    )
}
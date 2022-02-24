import React, { useState } from 'react'
import { StyledInputTask } from './StyledInputTask'

type InputType = {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
}

const InputTask: React.FC<InputType> = ({handleInput, value}) => {      

    return (
      <>
        <StyledInputTask onChange={handleInput} value={value} placeholder="Ex: take out the garbage"/>
      </>
    )
}

export default InputTask
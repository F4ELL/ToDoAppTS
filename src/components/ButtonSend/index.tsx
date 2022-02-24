import React from 'react'
import ListTasks from '../ListTasks'
import { StyledButtonSend } from './StyledButtonSend'

type ButtonType = {
  handleCreateTask: () => void
}

const ButtonSend: React.FC<ButtonType> = ({handleCreateTask}) => {
  return (
    <>
      <StyledButtonSend onClick={() => handleCreateTask()}>create task</StyledButtonSend>
    </>
  )
}

export default ButtonSend
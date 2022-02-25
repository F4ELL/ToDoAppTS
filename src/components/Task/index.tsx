import React from 'react'
import { TTask } from '../../App'
import { StyledTask } from './StyledTask'
import Delete from '../../assets/images/delete.png'
import Vector from '../../assets/images/vector.png' 
import { StyledListTasks } from '../ListTasks/StyledListTasks'

type TTaskComponent = {
  item: TTask,
  handleDelete: (id: number) => void
}

const Task: React.FC<TTaskComponent> = ({item, handleDelete}) => {
  return (
    <>
        <StyledTask>
          <button className='delete-btn' onClick={(e) => handleDelete(item.id)}>
            <img src={Delete} alt="delete task" />
          </button>
            
            {item.title}

          <button className='completed-btn'>
            <img src={Vector} alt="completed task" />
          </button>
        </StyledTask>
    </>
  )
}

export default Task
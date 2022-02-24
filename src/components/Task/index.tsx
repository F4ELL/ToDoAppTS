import React from 'react'
import { TTask } from '../../App'
import { StyledTask } from './StyledTask'
import Delete from '../../assets/images/delete.png'
import Vector from '../../assets/images/vector.png' 

type TTaskComponent = {
  item: TTask
}

{
/*
const deleteTask = ({}) => {

  const filterTasks = ({item}) => id !== item.id;

  const listAtt = 
}
*/
}

const Task: React.FC<TTaskComponent> = ({item}) => {
  return (
    <>
        <StyledTask>
          <button className='delete-btn'>
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
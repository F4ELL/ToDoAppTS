import React from 'react'
import { TTask } from '../../App'
import Task from '../Task'
import { StyledListTasks } from './StyledListTasks'

export type TList = {
  list: TTask[],
  updateTask: (tasks: TTask[]) => void,
}


const ListTasks: React.FC<TList> = ({list, updateTask}) => {
  
  const deleteTask = (id: number) => updateTask(list.filter((item) => item.id !== id));

  return (
    <>
      <StyledListTasks>        
        {list&& list.map((item, index) => (
          <Task key={index} item={item} handleDelete={deleteTask}/>
        ))}
      </StyledListTasks>
    </>
  )
}

export default ListTasks
import React from 'react'
import { TTask } from '../../App'
import Task from '../Task'
import { StyledListTasks } from './StyledListTasks'

export type TList = {
  list: TTask[],
  updateTask: (tasks: TTask[]) => void,
}

const ListTasks: React.FC<TList> = ({list, updateTask}) => {
  
  // function delete
  const deleteTask = (id: number) => updateTask(list.filter((item) => item.id !== id));

  // function complet
  const completTask = (id: number) => {
    const listCopy = [...list];

    const index = list.findIndex((i) => i.id === id);
    listCopy[index].isCompleted = true;

    updateTask(listCopy);
  }

  return (
    <>
      <StyledListTasks>       
        {list&& list.map((item, index) => (
          <div key={item.id}>{
            !item.isCompleted &&
              <Task item={item} handleDelete={deleteTask} handleComplet={completTask}/>
            }
          </div>
        ))}
      </StyledListTasks>
    </>
  )
}

export default ListTasks
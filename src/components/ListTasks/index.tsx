import React from 'react'
import { TTask } from '../../App'
import Task from '../Task'
import { StyledListTasks } from './StyledListTasks'

export type TList = {
  list: TTask[]
}

const ListTasks: React.FC<TList> = ({list}) => {
  return (
    <>
      <StyledListTasks>        
        {list&& list.map((item, index) => (
          <Task key={index} item={item}/>
        ))}
      </StyledListTasks>
    </>
  )
}

export default ListTasks
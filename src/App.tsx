import { useState } from 'react'
import ButtonSend from './components/ButtonSend'
import InputTask from './components/InputTask'
import ListTasks from './components/ListTasks';
import { GlobalStyle } from './globalStyles';

export type TTask = {
  id: number,
  title: string,
  isCompleted: boolean
}

function App() {

  const [ task, setTask ] = useState('');
  const [ listTask, setListTasks ] = useState<TTask[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTask(e.target.value);
  } 

  const createTask = () => {
      setListTasks(listTask => [{id: listTask.length, title: task, isCompleted: false}, ...listTask]);
      setTask("");
  }

  return (
    <div>
      <GlobalStyle />
      <div className='container'>
        <div className='input-bar'>
          <InputTask handleInput={(e) => handleInput(e)} value={task}/>
          <ButtonSend handleCreateTask={() => createTask()}/>
        </div>
        <div className='container-list'>
          <ListTasks list={listTask} updateTask={setListTasks}/>
        </div>
      </div>
    </div>
  )
}

export default App

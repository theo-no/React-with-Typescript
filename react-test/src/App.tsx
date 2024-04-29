import React, {useState} from 'react';
import './App.css';
import TodoBoard from './component/TodoBoard';


const App:React.FC = () => {
  
  const [item, setItem] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const addItem=()=>{
      setTodoList([...todoList, item]);
  }

  return (
    <main>
      <input type="text" onChange={(event)=>setItem(event.target.value)}/>
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}/>
    </main>
  )
}

export default App

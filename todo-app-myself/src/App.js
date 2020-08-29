import React, {useState, useCallback, useRef} from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:'컴포넌트 공부하기',
      checked:false,
    },
    {
      id:2,
      text:'컴포넌트 공부하기2',
      checked:false,
    },
    {
      id:3,
      text:'컴포넌트 공부하기3',
      checked:true,
    },
  ]);

  const nextId = useRef('4');

  const onInsert = useCallback(
    text=>{
      const todo ={
        id:nextId.current,
        text,
        checked:false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  )


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
};

export default App;
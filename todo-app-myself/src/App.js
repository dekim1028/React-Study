import React, {useReducer, useCallback, useRef} from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function setTodoList(){
  const todo=[];
  for(var i=1;i<=5000;i++){
    todo.push({
      id:i,
      text:`할 일 ${i}`,
      checked:false,
    });
  }

  return todo;
}

function todoReducer(todos,action){
  switch(action.type){
    case "INSERT": return todos.concat(action.todo);
    case "REMOVE": return todos.filter(todo=>todo.id!==action.id);
    case "TOGGLE": return todos.map(todo=>todo.id===action.id?{...todo, checked:!todo.checked}:todo);
    default: return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer,undefined,setTodoList);

  const nextId = useRef('5001');

  const onInsert = useCallback(
    text=>{
      const todo ={
        id:nextId.current,
        text,
        checked:false
      };
      dispatch({type:"INSERT",todo});
      nextId.current += 1;
    },[]);

  const onRemove = useCallback(
    id=>{
      dispatch({type:"REMOVE",id});
    },[]);

  const onToggle = useCallback(
    id=>{
      dispatch({type:"TOGGLE",id});
    },[]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;
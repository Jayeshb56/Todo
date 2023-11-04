
import './App.css';
import React,{useState} from 'react'
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';

function App() {
  const [todoList,setTodoList] = useState([]);
  let addList = (inputText) =>{
    setTodoList([...todoList, inputText]);
  }
    const deleteListItem = (key) =>{
      let newListTodo = [...todoList];
      newListTodo.splice(key,1)
      setTodoList([...newListTodo])
    }
  
  return (
    <div className='App'>
    <TodoInput addList = {addList}/>
    <h>TODO</h>
    <hr />
    {todoList.map((listItem,i) =>{
      return(
        <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
      )
    })}
    </div>
  );
}

export default App;

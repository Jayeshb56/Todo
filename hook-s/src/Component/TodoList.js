import React from 'react'
import '../App.css';

function TodoList(props) {
  return (
    
    <div >
      <div class="card">
  <div class="card-body">
  {props.item}
  <div className='icon'>
  <i className="fa-solid fa-trash-can icon" 
            onClick={(e) =>{
                props.deleteItem(props.index)
            }}
            ></i>
            </div>
  </div>
</div>
      
    </div>
  )
}

export default TodoList
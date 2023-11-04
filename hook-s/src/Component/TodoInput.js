import React,{useEffect, useState} from 'react'
import '../App.css';

export default function TodoInput(props) {
  const [inputText,setInputText] = useState('');

  
  return (
    <div className='container'>
       <h>TODO List</h>
       <br></br>
       <textarea className='input-box'
       value={inputText}
       onChange={e =>{
        setInputText(e.target.value)
        }}></textarea>
       <br></br>
       <button type='submit' className="btn btn-primary btn-lg"
       onClick={() => {props.addList(inputText)
      setInputText('')
      }}
       >Add</button>
      
    </div>
  );
}

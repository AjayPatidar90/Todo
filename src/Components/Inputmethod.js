import React, { useState } from 'react'

const Inputmethod = (props) => {
  const [inputText,setInputText] = useState("")
  return (
    <div>
         <input type="text" placeholder='write your name' 
         value={inputText}
         onChange={e=>{
          setInputText(e.target.value)
         }}/>
         
         <button onClick={()=>{
          props.add(inputText)
          setInputText("")
         }}>+</button>
    </div>
  )
}

export default Inputmethod

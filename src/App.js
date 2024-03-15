import React, { useState } from 'react'
import './App.css';
import Inputmethod from './Components/Inputmethod';
import List from './Components/List';

const App = () => {
  const [addlist,setAddlist]= useState([])

    let add=(item)=>{
       if(item!=="")
       setAddlist([...addlist,item])
       
      }

    let deletebtn =(key)=>{
      let newlist = ([...addlist])
      newlist.splice(key,1)
      setAddlist([...newlist])
    
    }
  return (
    <div className='main-container'>
      <Inputmethod  add={add}/>
    
      <br />
      <h1>TODO</h1>
      <br />
          {
            addlist.map((value,i)=>{
             
             return(

                <List deletebtn={deletebtn} key={i} index={i} value={value}/>

              )

            })
          }
    </div>
    
  )
}

export default App

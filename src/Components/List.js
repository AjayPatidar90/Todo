import React from 'react'

const List = (props) => {
  return (
    <div>
        {props.value}
        <div>
          <button onClick={()=>{
             props.deletebtn(props.index)
          }}>delete</button>
        </div>
    </div>
  )
}

export default List

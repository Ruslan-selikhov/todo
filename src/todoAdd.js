import React,{ useState } from "react";
function TodoAdd({createNew}){
  const  [value,setValue]= useState('')

  function handlerSubmit(e){
      console.log('value is: '+value)
      e.preventDefault();
      if(value.trim())
      {
          createNew(value);

      }

  }
    return(
        <div className='addForm'>
        <form onSubmit={handlerSubmit}>

            <input value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button type='submit' > ADD</button>
        </form>
        </div>
    )
}
export default TodoAdd
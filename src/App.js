import logo from './logo.svg';
import './App.css';
import ItemTodo from './itemTodo'
import {useState} from 'react';
import Context from './context'
import TodoAdd from './todoAdd'


function App() {

  let [tasks,refresh] = useState([
    {id:1,title:'Kupit hleb',completed:false},
    {id:2,title:'Kupit maslo',completed:false},
    {id:3,title:'Kupit vodu',completed:false}
  ])

  function onClick(id){
    refresh(
      tasks=tasks.map(
        (task)=>{
          if(task.id==id)
          {
            task.completed=!task.completed;
            console.log('task cganged')
          }
          return task;
        }
      )
    )

  }
  function removeTodo(id){
    refresh(
      tasks.filter(todo=> todo.id !==id)
    )
  }
  function createNew(title,id=Date.now(),completed=false){
 
    refresh([...tasks, {title, id, completed}])
  }

  return (

    <Context.Provider value={{removeTodo:removeTodo}}>
    <div className="App">

      <div className="Container">
        <TodoAdd createNew={createNew}/>
        <ul>
          {tasks.map(
            (val,index)=>{
              console.log(val.completed)

              return(
              <ItemTodo todo={val} onClick={onClick} number={index} key={index}/>
              
              )
            }

          )}
       </ul>
      </div>
    </div>

    </Context.Provider>
  );
}

export default App;

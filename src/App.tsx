import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";


function App() {
  const tasks1:Array<TaskType> =[
    {id:1,title: ' HTML&CSS', isDone: true},
    {id:2,title: ' JS/TS', isDone: true},
    {id:3,title: ' React', isDone: false},
  ]

  const tasks2:Array<TaskType> =[
    {id:1,title: ' Milk', isDone: true},
    {id:2,title: ' Beer', isDone: true},
    {id:3,title: ' Coffee', isDone: false},
  ]
  return (
    <div className="App">
      <TodoList title='What to learn' tasks={tasks1}/>
      <TodoList title='What to buy' tasks={tasks2}/>

    </div>
  );
}

export default App;

import React from 'react'
import ToDoItem from "./components/toDoItem";
import ToDoData from './components/ToDoData'
class App extends React.Component{
  constructor(){
      super()
      this.state = {
      todo: ToDoData
      }
      this.handleCheck = this.handleCheck.bind(this)
  }
  handleCheck(id){
      this.setState(prevState => {
      const newTodo = prevState.todo.map(value => {
          if (value.id === id){
              return{
                  ...value,
                  completed: !value.completed
              }
          }
          return value
      })
      return{
          todo: newTodo
      }
      }
      )}

  render(){
      const todos = this.state.todo.map(item => <ToDoItem values={item} key={item.id} onCheck={this.handleCheck}/>)
    return(
        <div className={"todo-list"}>
            {todos}
        </div>
    )
  }
}
export default App

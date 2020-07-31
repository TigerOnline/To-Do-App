import React from 'react'
import './todoStyle.css'
class ToDoItem extends React.Component{
    render(){
        let toDoText = this.props.values.text
        return(
            <div className={"todo-item"}>
                <input
                    type={"checkbox"}
                    checked={this.props.values.completed}
                    onChange={() => this.props.onCheck(this.props.values.id)}
                />
                {this.props.values.completed === true ? <p><del>{toDoText}</del></p> : <p>{toDoText}</p>}
            </div>
        )
    }
}
export default ToDoItem

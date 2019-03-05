import React from "react";
class ListTodo extends React.Component{
render() {
    const todo = this.props.todo
    
    return <ul id='container'>
    
        {todo.map((item, idx) =>
            <div className='todos'>
                <li key={idx}>ToDo: {item.title}</li>
                <li key={idx}>Date: {item.date.toLocaleDateString()}</li>
            </div>)}
    </ul>
}
}
export default ListTodo;
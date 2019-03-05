import React from 'react'
import ListTodo from './ListTodo'
 let d=new Date()
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const todos = [
    {
        title: 'Meet Friends',
        date: new Date()
    },
    {
        title: 'Go to libray',
        date: new Date()
    },
    {
        title: 'Read book',
        date: new Date()
    },
    {
        title: 'Shopping',
        date: new Date()
    },
]

class LIst extends React.Component {
    render() {
        return <div>
            <h1 id='title'>My ToDo List</h1>
            <ListTodo todo={todos} />
        </div>
    }
}

export default LIst;
import React from 'react';

class List extends React.Component {
    render(){
        const deleteItem = this.props.deleteItem;
        const toDoStatus = this.props.toDoStatus;
        const list = this.props.info.map((data) => (
            <li key = {data.id}> 
                <input 
                    type="checkbox" 
                    checked = {data.done} 
                    onChange={() => (toDoStatus(data.id))}
                /> 
                <span className = {data.done ? 'completed-toDo' : ''}> 
                    {data.description} 
                </span>
                <button onClick={() => deleteItem(data.id)}> x </button>
            </li>));
               
            
            if(list.length!==0)
            {

                return (   <div >
                <ul className = 'info'>{list}</ul>
            </div>)
            }
            else{               
            return <h2>No items!!Enter new item</h2>
            }
            
        
    }
      
  
  }
  export default List;
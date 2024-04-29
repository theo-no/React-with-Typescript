import React from "react";
import TodoItem from "./TodoItem";

interface TodoBoardProps {
    todoList: string[];
}

const TodoBoard:React.FC<TodoBoardProps> = ({todoList}) => {

    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map((todoItem)=><TodoItem todoItem={todoItem}/>)}
        </div>
    )
}

export default TodoBoard
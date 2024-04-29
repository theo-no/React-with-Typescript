import React from "react";

interface TodoItemProps {
    todoItem: string;
}

const TodoItem:React.FC<TodoItemProps> = ({todoItem}) =>{


    return (
        <div className="todo-item">
            {todoItem}
        </div>
    )

}

export default TodoItem
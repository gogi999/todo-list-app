import React from 'react';

const TodoItem = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((td) => td.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((td) => {
            if (td.id === todo.id) {
                return { ...td, completed: !td.completed }
            }
            return td;
        }));
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="done-btn">Done</button>
            <button onClick={deleteHandler} className="trash-btn">Delete</button>
        </div>
    );
}

export default TodoItem;

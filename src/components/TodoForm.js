import React from 'react';
import uuid from 'uuid';

const TodoForm = ({ todo, setTodo, todos, setTodos }) => {
    const inputHandler = (e) => {
        setTodo(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setTodos([
            ...todos, {
                text: todo,
                completed: false,
                id: uuid(),
            }
        ]);

        setTodo('');
    }

    return (
        <form>
            <input
                value={todo}
                onChange={inputHandler}
                type="text"
                placeholder="Add new todo..."
                className="todo-input"
            />
            <button
                onClick={submitHandler}
                className="todo-btn"
                type="submit"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;

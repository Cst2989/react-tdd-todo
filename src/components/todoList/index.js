import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({todos, deleteTodo, checkTodo}) => {
    const todoItems = todos.map(todo => (
        <li key={todo.id}>
            <button type="button" className="todo-delete" onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
            <input type="checkbox" className="todo-check" checked={todo.checked}  onClick={() => checkTodo(todo.id)}/>
            <span className="todo-text">{todo.text}</span>
        </li>
    ));

    return (
        <div>
            <ul>
                {todoItems}
            </ul>

        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
    },)).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    checkTodo: PropTypes.func.isRequired
};

export default TodoList;

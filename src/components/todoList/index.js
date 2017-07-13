import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({todos, deleteTodo, unDeleteTodo}) => {
    const todoItems = todos.map(todo => (
        <li key={todo.id}>
            <button type="button" className="todo-delete" onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
            <span className="todo-text">{todo.text}</span>
        </li>
    ));

    return (
        <div>
            <ul>
                {todoItems}
            </ul>
            <button type="button" className="todo-unDelete" onClick={() => unDeleteTodo()}>
                Restore Last Delete
            </button>
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    },)).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    unDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;

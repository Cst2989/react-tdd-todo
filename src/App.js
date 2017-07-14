import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import TodoList from './components/todoList';
import actions from './actions/';

export const App = ({ submitTodo, todos, deleteTodo, unDeleteTodo, checkTodo }) => (
  <div>
    <h1>Todo list</h1>
    <AddTodo submitTodo={submitTodo} unDeleteTodo={unDeleteTodo} />
    <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  unDeleteTodo: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },
  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },
  unDeleteTodo: () => {
    dispatch(actions.unDeleteTodo());
  },
  checkTodo: (id) => {
      dispatch(actions.checkTodo(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

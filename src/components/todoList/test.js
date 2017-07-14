import React from 'react';
import {shallow} from 'enzyme';
import TodoList from '.';

describe('TodoList component', () => {
    const deleteMock = jest.fn();
    const checkMock = jest.fn();
    const unDeleteMock = jest.fn();

    const props = {
        todos: [
            {
                id: 1,
                text: 'A todo',
                checked: false
            }
        ],
        deleteTodo: deleteMock,
        checkTodo: checkMock,
        unDeleteTodo: unDeleteMock
    };
    const component = shallow(<TodoList {...props}/>);

    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Should display a todo when passed in as a prop', () => {
        expect(component.find('.todo-text').text()).toEqual(props.todos[0].text);
    });

    it('Should call the deleteTodo function when Delete button is clicked', () => {
        expect(deleteMock.mock.calls.length).toEqual(0);
        component.find('.todo-delete').simulate('click');
        expect(deleteMock.mock.calls.length).toEqual(1);
    });

    it('Should call the checkTodo function when check button is clicked', () => {
        expect(checkMock.mock.calls.length).toEqual(0);
        component.find('.todo-check').simulate('click');
        expect(checkMock.mock.calls.length).toEqual(1);
    });


});

import React from 'react';
import {shallow} from 'enzyme';
import TodoList from '.';

describe('TodoList component', () => {
    const deleteMock = jest.fn();
    const unDeleteMock = jest.fn();

    const props = {
        todos: [
            {
                id: 1,
                text: 'A todo'
            }
        ],
        deleteTodo: deleteMock,
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

    it('Should call the unDeleteTodo function when unDelete button is clicked', () => {
        expect(unDeleteMock.mock.calls.length).toEqual(0);
        component.find('.todo-unDelete').simulate('click');
        expect(unDeleteMock.mock.calls.length).toEqual(1);
    });
});

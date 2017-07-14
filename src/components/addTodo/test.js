import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  let component;
  const submitMock = jest.fn();
  const undeleteMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo
        unDeleteTodo={undeleteMock}
        submitTodo={submitMock}
      />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });

  describe('Add todo button', () => {
    it('Should exist', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('Should call the submitTodo function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} unDeleteTodo={undeleteMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });

    it('Should call the unDeleteTodo function when unDelete button is clicked', () => {
        component = mount(<AddTodo submitTodo={submitMock} unDeleteTodo={undeleteMock} />);
        expect(undeleteMock.mock.calls.length).toEqual(0);
        component.find('.todo-unDelete').simulate('click');
        expect(undeleteMock.mock.calls.length).toEqual(1);
    });
  });
});

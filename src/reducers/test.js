import {reducer, initialState} from '.';
import types from '../constants/';

describe('Reducer', () => {
    const todoText = 'A todo';

    it('Should return the initial state when no action passed', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe('Submit todo', () => {
        it('Should return the correct state', () => {
            const action = {
                type: types.SUBMIT_TODO,
                id: 1,
                text: todoText
            };

            const expectedState = {
                todos: [
                    {
                        id: 1,
                        text: todoText,
                        checked: false
                    }
                ],
                deleted: {}
            };

            expect(reducer(undefined, action)).toEqual(expectedState);
        });
    });
    describe('Check todo',() => {
        it("should return the correct state", () => {
            const startingState = {
                todos: [
                    {
                        id: 1,
                        text: todoText,
                        checked: false
                    }
                ],
                deleted: {}
            };

            const action = {
                type: types.CHECK_TODO,
                id: 1
            };

            const expectedState = {
                todos: [
                    {
                        id: 1,
                        text: todoText,
                        checked: true
                    }
                ],
                deleted: {}

            };

            expect(reducer(startingState, action)).toEqual(expectedState);
        });
    });
    describe('Delete todo', () => {
        it('Should return the correct state', () => {
            const startingState = {
                todos: [
                    {
                        id: 1,
                        text: todoText,
                        checked: false
                    }
                ],
                deleted: {}
            };

            const action = {
                type: types.DELETE_TODO,
                id: 1
            };

            const expectedState = {
                todos: [],
                deleted: {
                    id: 1,
                    text: todoText,
                    checked: false
                }

            };

            expect(reducer(startingState, action)).toEqual(expectedState);
        });
    });

    describe('UnDelete todo', () => {
        it('Should return the correct state', () => {
            const startingState = {
                todos: [
                    {
                        id: 1,
                        text: todoText,
                        checked: false
                    }
                ],
                deleted:
                    {
                        id: 2,
                        text: todoText,
                        checked: false
                    }
            };

            const action = {
                type: types.UNDELETE_TODO,
                id: 2
            };

            const expectedState = {
                todos: [
                    {
                        id: 1,
                        text: todoText,
                        checked: false
                    }, {
                        id: 2,
                        text: todoText,
                        checked: false
                    }
                ],
                deleted: {}
            };

            expect(reducer(startingState, action)).toEqual(expectedState);
        });
    });
});

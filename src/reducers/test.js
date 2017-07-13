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
                        text: todoText
                    }
                ],
                deleted: {}
            };

            expect(reducer(undefined, action)).toEqual(expectedState);
        });
    });

    describe('Delete todo', () => {
        it('Should return the correct state', () => {
            const startingState = {
                todos: [
                    {
                        id: 1,
                        text: todoText
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
                    text: todoText
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
                        text: todoText
                    }
                ],
                deleted:
                    {
                        id: 2,
                        text: todoText
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
                        text: todoText
                    }, {
                        id: 2,
                        text: todoText
                    }
                ],
                deleted: {}
            };

            expect(reducer(startingState, action)).toEqual(expectedState);
        });
    });
});

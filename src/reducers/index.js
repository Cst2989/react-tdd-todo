import types from '../constants/';

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
     switch (action.type) {
        case 'SUBMIT_TODO':
            return {
                todos: [
                  {
                    id: action.id,
                    text: action.text,
                  },
                ],
            }
            break;
        default:
            return state
    }

};

export default reducer;

import { UPDATE_LOADING_VISIBLE } from '../actions/actionTypes';

export const loading = (state = { isVisible: true, x: 0, y: 0, scale: 1, progress: 0 }, action) => {
    switch (action.type) {
        case UPDATE_LOADING_VISIBLE:
            return Object.assign({}, state, {
                isVisible: action.isVisible
            });

        default:
            return state;
    }
};

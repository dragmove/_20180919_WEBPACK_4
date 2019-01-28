import { RESIZE_BROWSER, UPDATE_BROWSER_SCROLLTOP } from '../actions/actionTypes';

export const browser = (state = { width: 0, height: 0, scrollTop: 0 }, action) => {
    switch (action.type) {
        case RESIZE_BROWSER:
            return Object.assign({}, state, {
                width: window.innerWidth,
                height: window.innerHeight
            });

        case UPDATE_BROWSER_SCROLLTOP:
            return Object.assign({}, state, {
                scrollTop: action.scrollTop
            });

        default:
            return state;
    }
};

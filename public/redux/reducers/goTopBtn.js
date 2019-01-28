import { UPDATE_GO_TOP_BTN_VISIBLE } from '../actions/actionTypes';

export const goTopBtn = (state = { isVisible: false }, action) => {
    switch (action.type) {
        case UPDATE_GO_TOP_BTN_VISIBLE:
            return Object.assign({}, state, {
                isVisible: action.isVisible
            });

        default:
            return state;
    }
};

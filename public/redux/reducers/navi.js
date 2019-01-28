import { UPDATE_NAVI_INDEX } from '../actions/actionTypes';

export const navi = (state = { d1Index: 0, d2Index: 0 }, action) => {
    switch (action.type) {
        case UPDATE_NAVI_INDEX:
            return {
                d1Index: action.d1Index,
                d2Index: action.d2Index
            };

        default:
            return state;
    }
};

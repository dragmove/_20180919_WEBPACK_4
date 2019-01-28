import { UPDATE_GO_TOP_BTN_VISIBLE } from './actionTypes';

export const updateGoTopBtnVisible = (isVisible = false) => ({
    type: UPDATE_GO_TOP_BTN_VISIBLE,
    isVisible
});

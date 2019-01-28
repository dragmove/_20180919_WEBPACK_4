import { UPDATE_LOADING_VISIBLE } from './actionTypes';

export const updateLoadingVisible = (isVisible = false) => ({
    type: UPDATE_LOADING_VISIBLE,
    isVisible
});

import { UPDATE_NAVI_INDEX } from './actionTypes';

export const updateNaviIndex = (d1Index, d2Index) => ({
    type: UPDATE_NAVI_INDEX,
    d1Index,
    d2Index
});

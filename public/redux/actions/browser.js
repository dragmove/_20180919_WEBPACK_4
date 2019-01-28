import { RESIZE_BROWSER, UPDATE_BROWSER_SCROLLTOP } from './actionTypes';

export const resizeBrowser = () => ({ type: RESIZE_BROWSER });

export const updateBrowserScrollTop = scrollTop => ({
    type: UPDATE_BROWSER_SCROLLTOP,
    scrollTop
});

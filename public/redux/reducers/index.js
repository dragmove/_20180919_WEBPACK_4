import { combineReducers } from 'redux';
import { loading } from './loading';
import { goTopBtn } from './goTopBtn';
import { browser } from './browser';
import { navi } from './navi';
import { services } from './services';

export const rootReducer = combineReducers({
    loading,
    goTopBtn,
    browser,
    navi,
    services
});

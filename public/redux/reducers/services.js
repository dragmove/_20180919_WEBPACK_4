import { FETCH_SERVICES, FETCH_SERVICES_FULFILLED, FETCH_SERVICES_REJECTED } from '../actions/actionTypes';

export const services = (state = [], action) => {
    switch (action.type) {
        case FETCH_SERVICES_FULFILLED:
            return action.payload;

        default:
            return state;
    }
};

export const fetchServicesError = (state = null, action) => {
    switch (action.type) {
        case FETCH_SERVICES:
            return null;

        case FETCH_SERVICES_FULFILLED:
            return null;

        case FETCH_SERVICES_REJECTED:
            return action.payload;

        default:
            return state;
    }
};

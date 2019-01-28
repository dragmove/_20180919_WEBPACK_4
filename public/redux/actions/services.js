import {
    FETCH_SERVICES,
    FETCH_SERVICES_FULFILLED,
    FETCH_SERVICES_CANCELLED,
    FETCH_SERVICES_REJECTED
} from './actionTypes';

export const fetchServices = () => ({ type: FETCH_SERVICES });

export const fetchServicesFulfilled = payload => ({
    type: FETCH_SERVICES_FULFILLED,
    payload
});

export const fetchServicesRejected = payload => ({
    type: FETCH_SERVICES_REJECTED,
    payload,
    error: true
});

export const cancelFetchServices = () => ({
    type: FETCH_SERVICES_CANCELLED
});

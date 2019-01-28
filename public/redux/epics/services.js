import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap, map, catchError, takeUntil } from 'rxjs/operators';
import { FETCH_SERVICES, FETCH_SERVICES_CANCELLED } from '../actions/actionTypes';
import { fetchServicesFulfilled, fetchServicesRejected } from '../actions/services';

export const fetchServicesEpic = (action$, state$, { getJSON }) => {
    return action$.pipe(
        ofType(FETCH_SERVICES),
        mergeMap(action => {
            return getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
                map(response => fetchServicesFulfilled(response)),
                catchError(error => {
                    return Observable.of(fetchServicesRejected(error.xhr.response));
                }),
                takeUntil(action$.ofType(FETCH_SERVICES_CANCELLED))
            );
        })
    );
};

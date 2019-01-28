import { createStore, applyMiddleware, compose } from 'redux';

// state
import { state } from './state/state';

// reducers
import { rootReducer } from './reducers/index';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

// epics from redux-observable
import { ajax } from 'rxjs/ajax'; // inject dependencies to epic middleware
import { rootEpic } from './epics/index'; // pingEpic, fetchUserEpic

// + set initial state
const initialState = Object.assign({}, state);

// + set middlewares
// set epicMiddleware(redux-observable) and inject dependencies.
// https://redux-observable.js.org/MIGRATION.html#setting-up-the-middleware
const epicMiddleware = createEpicMiddleware({
    dependencies: { getJSON: ajax.getJSON }
});
const loggerMiddleware = createLogger(/* options */);
const customMiddleware = store => next => action => {
    console.group();
    console.log('[customMiddleware] start');

    const result = next(action);

    console.log('[customMiddleware] end');
    console.groupEnd();

    return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware, loggerMiddleware, customMiddleware))
);

epicMiddleware.run(rootEpic);

export default function configureStore() {
    return store;
}

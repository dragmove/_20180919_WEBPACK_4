import { combineEpics } from 'redux-observable';
import { pingEpic } from './ping';
import { fetchServicesEpic } from './services';

export const rootEpic = combineEpics(pingEpic, fetchServicesEpic);

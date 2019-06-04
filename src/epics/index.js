import { combineEpics } from 'redux-observable';
import * as epics from './petEpic';

export default combineEpics(
    epics.fetchPetEpic,
    epics.filterPetEpic
);

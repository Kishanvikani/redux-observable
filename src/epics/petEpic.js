import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { map, catchError, switchMap, debounceTime, throttleTime, skip, tap, concatMap, distinct, reduce } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'
import { petActions } from '../actions';

// Called only once while registering the epics with store on app load

export function fetchPetEpic(action$) {
    console.log('%cFetch Epic Called', 'color: green; font-size: 20px')
    return action$.pipe(
        ofType('GET_PETS'),
        tap(response => console.log('%cFetch Epic receiving stream of actions', 'color: red; font-size: 20px')),
        switchMap(action => 
            ajax.getJSON(`https://petstore.swagger.io/v2/pet/findByStatus?status=${action.payload}`).pipe(
                // concatMap(response => from(response)),
                // distinct(pet => pet.id),
                // reduce((pets, pet) => [...pets, pet], []),
                map( petList => petList.filter((pet, index, list) => {
                                    return list.map(petObj =>
                                        petObj.id).indexOf(pet.id) === index && pet.name;
                                    })),
                map(response => petActions.setPets(response))
        )),
        catchError( error => ({ type: 'ERROR_PETS_FETCH', payload: error})),
    )
}

export function filterPetEpic(action$, state$) {
    console.log('%cFilter Epic Called', 'color: green; font-size: 20px')
    return action$.pipe(
        ofType('FILTER_PETS'),
        tap(response => console.log('%cFilter Epic receiving stream of actions', 'color: red; font-size: 20px')),
        // debounceTime(2000),
        // throttleTime(5000),
        // skip(2),
        map( action => state$.value.petReducer.petList.filter( pet => pet.name && (pet.name.indexOf(action.payload) !== -1))),
        map( petList => petActions.setPets(petList))
    )
}

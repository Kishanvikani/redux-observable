import { ofType } from 'redux-observable';
import { map, catchError, switchMap, debounceTime } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'
import { petActions } from '../actions';

export function fetchPetEpic(action$) {
    return action$.pipe(
        ofType('GET_PETS'),
        switchMap(action => 
            ajax.getJSON(`https://petstore.swagger.io/v2/pet/findByStatus?status=${action.payload}`).pipe(
                map( response => response.map( (pet) => ({
                    id: pet.id,
                    name: pet.name,
                    status: pet.status,
                }))),
                map( petList => petList.filter( pet => pet.name !== "doggie")),
                map(response => petActions.setPets(response))
        )),
        catchError( error => ({ type: 'ERROR_PETS_FETCH', payload: error})),
    )
}

export function filterPetEpic(action$, state$) {
    return action$.pipe(
        ofType('FILTER_PETS'),
        // debounceTime(2000),
        map( action => {
            console.log('called')
            return state$.value.petReducer.petList.filter( pet => (pet.name.indexOf(action.payload) !== -1))
        }),
        map( petList => petActions.setPets(petList))
    )
}

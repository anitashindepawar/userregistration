import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { FETCH_USERS } from '../../../constantsVar';
import { getUsers } from "./../index";
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

var mock = new MockAdapter(axios);


describe('async actions', () => {
   
    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {


        const store = mockStore({})
        const data = [
            {
                "company": "NAB",
                "id": 7,
                "name": "silam",
                "role": "sr dev",
            },
            {
                "company": "NAB",
                "id": 8,
                "name": "Anita",
                "role": "developer",
            }];
        mock.onGet('http://localhost:3004/users').reply(200, data);

        const expectedActions = [
            { type: FETCH_USERS, payload: data }]

        return store.dispatch(getUsers()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })

    });
});
import getUserAPI from '../../API/users';
import { FETCH_USERS, FETCH_USER_BY_ID, UPDATED_USER, CREATE_USER, DELETED_USER, RESET_USER_STATE } from '../../constantsVar';
//import {createBrowserHistory} from "history"


export const getUsers = () => {
    return async function (dispatch, getState) {
        const users = await getUserAPI.get('/users');
        dispatch({ type: FETCH_USERS, payload: users.data });
    };
};

export const createUser = (user) => {
    return async function (dispatch, getState) {
        const newUser = await getUserAPI.post('/users', user);
        dispatch({ type: CREATE_USER, payload: newUser.data, isUserCreated: true });
    };

};

export const updateUser = (user) => {
    return async function (dispatch, getState) {
        const modifiedUserData = await getUserAPI.put('/users/' + user.id, user);
        dispatch({ type: UPDATED_USER, payload: modifiedUserData.data, isUserUpdated: true });
    };
};

export const getUserByUserID = (userId) => {
    return async function (dispatch, getState) {
        const user = await getUserAPI.get('/users/' + userId);
        dispatch({ type: FETCH_USER_BY_ID, payload: user.data });
    };
};

<<<<<<< HEAD
export const getUserByUserID1 = (userId) => {
=======
export const getUserByUserID2 = (userId) => {
>>>>>>> 8ed0727f057713ed8f784c1c23db7f4a7d6c2c96
    return async function (dispatch, getState) {
        const user = await getUserAPI.get('/users/' + userId);
        dispatch({ type: FETCH_USER_BY_ID, payload: user.data });
    };
};

export const deleteUser = (userID) => {
    return async function (dispatch, getState) {
        const deleteUser = await getUserAPI.delete('/users/' + userID);
        dispatch({ type: DELETED_USER, userID: userID });
    };
};

 


export const resetUserState = () => {
    return async function (dispatch, getState) {
        dispatch({ type: RESET_USER_STATE });

    };
};

import { FETCH_USER_BY_ID } from '../../constantsVar';
import { UPDATED_USER, FETCH_USERS, CREATE_USER, DELETED_USER, RESET_USER_STATE, INITIAL_STATE } from '../../constantsVar';


const UserDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATED_USER: {
            return { ...state, fetchedUser: action.payload, isUserUpdated: action.isUserUpdated }
        }
        case FETCH_USERS: {
            return { ...state, dataList: action.payload };
        }
        case CREATE_USER: {
            return {
                ...state, isUserCreated: action.isUserCreated, fetchedUser: action.payload,
                dataList: [...state.dataList, Object.assign({}, action.payload)]
            };
        }
        case FETCH_USER_BY_ID: {
            return { ...state, fetchedUser: action.payload };
        }
        case DELETED_USER: {
            return { ...state, dataList: state.dataList.filter((user) => user.id !== action.userID) };
        }
        case RESET_USER_STATE: {
            return { ...state, fetchedUser: INITIAL_STATE.fetchedUser, 
                isUserCreated: INITIAL_STATE.isUserCreated, dataList: INITIAL_STATE.dataList,
                isUserUpdated: INITIAL_STATE.isUserUpdated };
        }
        default:
            return state;
    }

};

export default UserDetailsReducer;
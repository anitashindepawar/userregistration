import { SIGN_IN, SIGN_OUT} from '../../constantsVar';

export const signIn = () => {
    return {
        type: SIGN_IN
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};
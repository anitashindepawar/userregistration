import Enzyme, { shallow, mount } from 'enzyme';
import React from "React";
import UserDetailsReducer from '../UserDetailsReducer';


import Adapter from 'enzyme-adapter-react-16';
import { FETCH_USERS } from '../../../constantsVar';

Enzyme.configure({ adapter: new Adapter() })

describe("Testing UserDetails reducer", () => {
    it("Test action: FETCH_USERS", () => {
        const fetchUsersAction = {
            type: FETCH_USERS,
            payload: {data:"New Name"}
        };
        const outCome = UserDetailsReducer({}, fetchUsersAction);
        expect(outCome.dataList.data).toEqual("New Name");

    });
});
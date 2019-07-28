import Enzyme, { shallow, mount } from 'enzyme';
import React from "React";
import { UserDetails } from '../userDetails';


import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe("Testing UserDetails component", () => {

    const prop1 = {
        name: "abc",
        role: "role",
        company: "comp"

    }
    const userFunction = jest.fn();

    it("Test form and snapshot", () => {
        const wrapper = shallow(<UserDetails
            userDet={prop1}
            match={{ params: { id: 1 } }}
            getUserByUserID={userFunction} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("form")).toHaveLength(1);

    })

    it("Test mount and props", () => {
        const wrapper = mount(<UserDetails
            userDet={prop1}
            match={{ params: { id: 1 } }}
            getUserByUserID={userFunction} />);
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.props().match).toEqual({ "params": { "id": 1 } });
        expect(wrapper.props().userDet).toEqual(prop1);

    })

    it("Test button click", () => {
        const wrapper = mount(<UserDetails
            userDet={prop1}
            match={{ params: { id: 1 } }}
            getUserByUserID={userFunction}
            updateUser={userFunction}
        />);
        wrapper.find('#submitButton').simulate('click');
        expect(userFunction).toHaveBeenCalled();

    })

    it("Test cancel button click", () => {
        const wrapper = mount(<UserDetails
            userDet={prop1}
            match={{ params: { id: 1 } }}
            getUserByUserID={userFunction}
            updateUser={userFunction}
            resetUserState={userFunction}
        />);
        wrapper.find('#cancelButton').simulate('click');
        expect(userFunction).toHaveBeenCalled();

    })
})
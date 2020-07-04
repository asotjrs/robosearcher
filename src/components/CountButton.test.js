import React from "react";
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import CountButton from "./CountButton";
it('should render a Buttoncount', function () {
    expect(toJson(shallow(<CountButton/>))).toMatchSnapshot();
});
it('should simulate an onclick', function () {
    const mockColor="red";
    const wrapper=shallow(<CountButton color={mockColor}/>);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:1});
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:2});
    expect(wrapper.props().color).toEqual("red");
});
import {shallow} from 'enzyme';
import React from "react";
import Card from "./Card";
import toJson from "enzyme-to-json";
it('to match snap-shot', function () {
    const mockrobot="just testing";
    expect(toJson(shallow(<Card robot={mockrobot}/>))).toMatchSnapshot();

});



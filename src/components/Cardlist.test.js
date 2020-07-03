
import {shallow} from 'enzyme';
import React from "react";
import Cardlist from "./Cardlist";
import toJson from "enzyme-to-json";
it('to match snap-shot', function () {
    const mockrobots="this,is,just,to,test";
    expect(toJson(shallow(<Cardlist robots={mockrobots}/>))).toMatchSnapshot();

});



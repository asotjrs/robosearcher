import React from "react";
import MainPage from "./MainPage";
import {shallow} from 'enzyme';

it('should test only mainPage', function () {

    const mockProperties={

        searchField:'',
        robots:"",
        isPending:false,
        onSearchChange:jest.fn()

    };

    expect(shallow(<MainPage {...mockProperties} />)).toMatchSnapshot();

});

it('should is_pending should be false', function () {
    const mockProperties2={

        searchField:'',
        robots:"",
        isPending:false,
        onSearchChange:jest.fn()

    };

    expect(shallow(<MainPage {...mockProperties2} />).instance().props.isPending).toEqual(false);


});
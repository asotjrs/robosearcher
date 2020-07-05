import {CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants';
import * as actions from "./actions";
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from "redux-thunk";
import {useDispatch} from "react-redux";

const mockStore=configureMockStore([thunkMiddleware]);

it('should test changing the searchfield', function () {
    const test='whooo';
    const expectedAction={
        type:CHANGE_SEARCH_FIELD,
        payload:test
    };
    expect(actions.setSearchField(test)).toEqual(expectedAction);

});

it('should test the requestRobots functionality', function (done) {
 const store=mockStore();
 store.dispatch(actions.requestRobots());
 const action=store.getActions();
 const expectedAction={
     type: REQUEST_ROBOTS_PENDING
 };
 expect(action[0]).toEqual(expectedAction);
 done();
 console.log(action);

});


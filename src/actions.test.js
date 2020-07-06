import {CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants';
import * as actions from "./actions";
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from "redux-thunk";

const mockStore=configureMockStore([thunkMiddleware]);


const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
        status: status,
        statusText: statusText,
        headers: {
            'Content-type': 'application/json'
        }
    });
};

it('should test changing the searchfield', function () {
    const test='whooo';
    const expectedAction={
        type:CHANGE_SEARCH_FIELD,
        payload:test
    };
    expect(actions.setSearchField(test)).toEqual(expectedAction);

});

it('should test the requestRobots functionality', function () {
    const store=mockStore();

    store.dispatch(actions.requestRobots());
 const action=store.getActions();
 const expectedAction={
     type: REQUEST_ROBOTS_PENDING
 };
 expect(action[0]).toEqual(expectedAction);

});


it('calls request and success actions if the fetch response was successful', () => {
    const store=mockStore();
    const mock=mockResponse(200, null,
    '[{"name":"abdelhadi"},{"name": "myKK"},{"name":"myHH"}]');
   // console.log("success !! ",mock);

    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mock));

    return store.dispatch(actions.requestRobots())
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(2);
            expect(expectedActions[0]).toEqual({type: REQUEST_ROBOTS_PENDING});
            expect(expectedActions[1]).toEqual({type: REQUEST_ROBOTS_SUCCESS,
                payload: 'abdelhadi,myKK,myHH' });

        })
});

it('calls request and failure actions if the fetch response was not successful', () => {
    const store=mockStore();
    const mock=mockResponse(400, 'Test' +
        ' Error', JSON.stringify({"status":400, "statusText": 'Test Error'}));
    //console.log("erooooor ",mock);
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mock));

    return store.dispatch(actions.requestRobots())
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(2);
            expect(expectedActions[0]).toEqual({type: REQUEST_ROBOTS_PENDING});
            expect(expectedActions[1]).toEqual({type: REQUEST_ROBOTS_FAILED,
                payload:'error !!!'});
        })
});






import {CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants';
import * as reducers from './reducers';
describe("searchrobots",()=>{
    const initialStateSearch={
        searchField:''
    };

    it('should return the initial state', function () {
        expect(reducers.searchRobots(initialStateSearch,{})).toEqual(initialStateSearch);
    });

    it('should return a state with some input', function () {
        expect(reducers.searchRobots(initialStateSearch,{
            type:CHANGE_SEARCH_FIELD,
            payload:'cc'
        })).toEqual({searchField: 'cc'});
    });

});

describe("resuest robots",()=>{
    const initialStateRobots={
        isPending:false,
        robots:'',
        error:''

    };
    it('should should return the initial state', function () {
        expect(reducers.requestRobots(initialStateRobots,{})).toEqual(initialStateRobots);
    });

    it('should return the pending state', function () {

        expect(reducers.requestRobots(initialStateRobots,{
            type: REQUEST_ROBOTS_PENDING,

        })).toEqual({
            isPending: true,
            error:"",
            robots: ""
        });
    });

    it('should return the success state', function () {

        expect(reducers.requestRobots(initialStateRobots,{
            type: REQUEST_ROBOTS_SUCCESS,
            payload: "some, robots, to, test"
        })).toEqual({
            isPending: false,
            error:"",
            robots: "some, robots, to, test"
        });
    });
    it('should return the failed state', function () {
        expect(reducers.requestRobots(initialStateRobots,{
            type: REQUEST_ROBOTS_FAILED,
            payload: "nooooooooooooooooo !"
        })).toEqual({
            isPending: false,
            error:"nooooooooooooooooo !",
            robots: ""
        });

    });

});
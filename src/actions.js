import {CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_FAILED,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS
} from './constants'

export const setSearchField=(text)=>( {type:CHANGE_SEARCH_FIELD, payload:text});

export const requestRobots=()=>(dispatch)=>{
    dispatch({type:REQUEST_ROBOTS_PENDING});
     return fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(result=>{

         const robots=result.map((user)=>{ return user.name; });
        const rob=robots.join(',');
        dispatch({type:REQUEST_ROBOTS_SUCCESS,payload: rob});
    }).catch(error=>{
        dispatch({type:REQUEST_ROBOTS_FAILED,payload:"error !!!"})})
};
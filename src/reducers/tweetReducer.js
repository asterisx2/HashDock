import * as types from '../actions/actionTypes';

export default function courseReducer(state=[],action){
    switch(action.type){
        case types.NEW_TWEET:
            return [
                ...state,
                Object.assign({}, action.tweet)
            ];
    }
}
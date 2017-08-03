import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            //state 不能为空 否则concat会报错
            return state.concat([ action.payload.data ]);
            //不能直接改变state，concat不会改变原本的state
            // return [ action.payload.data, ...state];
    }
    return state;
}
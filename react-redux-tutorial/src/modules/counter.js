import {createAction, handleActions} from 'redux-actions';

//action type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//action 생성 함수
export const increase = createAction(INCREASE); 
export const decrease = createAction(DECREASE); 

//초기 값
const initialState = {
    number : 0
};

//리듀서 함수
const counter = handleActions(
    {
        [INCREASE]:(state,action)=>({number:state.number+1}),
        [DECREASE]:(state,action)=>({number:state.number-1}),
    },
    initialState
)

export default counter;
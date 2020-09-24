import {createAction, handleActions} from 'redux-actions';
import {delay, put, takeEvery, takeLatest, select, throttle} from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
//마우스 클릭 이벤트가 payload안에 들어가지 않도록
// () => undefined를 두번째 파라미터로 넣어줍니다.

export const increaseAsync = createAction(INCREASE_ASYNC,()=>undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC,()=>undefined);

function* increaseSaga(){
    yield delay(1000); // 1초를 기다립니다.
    yield put(increase()); //특정 액션을 디스패치합니다.

    //saga내부에서 현재상태를 참조해야하는 상황
    const number = yield select(state=>state.counter);
    console.log(`현재 값은 ${number}입니다.`);
}

function* decreaseSaga(){
    yield delay(1000); // 1초를 기다립니다.
    yield put(decrease()); //특정 액션을 디스패치합니다.
}

export function* counterSaga(){
    //saga가 실행되는 주기 제한방법
    //첫번째 파라미터: n초 * 1000
    yield throttle(3000,INCREASE_ASYNC,increaseSaga);
    //takeLatest는 기존에 진행중이던 작업이 있다면 취소처리하고
    //가장 마지막으로 실행된 작업만 수행합니다.
    yield takeLatest(DECREASE_ASYNC,decreaseSaga); 
}

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]:state=>state+1,
        [DECREASE]:state=>state-1
    },
    initialState
);

export default counter;
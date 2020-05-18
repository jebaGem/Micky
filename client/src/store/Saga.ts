import { put, call, all, fork , select, takeLatest, cancelled} from "redux-saga/effects";
import { fetchThermostatValues,updateCurrentSetPoint } from "../services/Api";
import * as actionCreators from "../actions/thermostatactions";
import * as actionTypes from "../types/actions";
import delay from '@redux-saga/delay-p'
import { thermostatReducerDefaultState, PatchRequest } from "../types/ThermostatState";

const INTERVAL_IN_MS = 2000;

/**
 * This task will be called whenever the "GET_VALUES" action is dispatched
*Fetch the data periodically
*If state is empty , dont add the timer
*If the state is non empty, call the api for every 2 seconds
 */
function* fetchDataPeriodically() {
  const token = yield select();
  while (true) {   
    yield call(onLoadThermoStatValues);
    if(token.thermostat===thermostatReducerDefaultState){}else{
      yield call(delay,INTERVAL_IN_MS)
    }   
  }
}

/**
*Called by fetchDataPeriodically task to fetch the API
*If the API is success ,dispatch the action called "getThermostatValuesSuccess" using put effect
*if the API fails dispatch "getThermoStatValuesFailure" action using put effect
*/
function* onLoadThermoStatValues() {
  try {
    const { data } = yield call(fetchThermostatValues); 
    if(data){
      yield put(actionCreators.getThermostatValuesSuccess(data));
    } 
  } catch (error) {
    yield put(actionCreators.getThermoStatValuesFailure(error.response));
  }
}

/**
*This task will be called whenever "SET_VALUES" action is called/dispatched
*Add the abort controller to cancel the previous call in the patch API call
*call the api with signal and current setpoint
*if the API fails dispatch "getThermoStatValuesFailure" action using put effect
*/
function* onUpdateValues() {
  try {
    const token = yield select();   
    yield fork(setCurrentSetPoint);
    yield put(actionCreators.setThermostatValuesSuccess(token.thermostat));
  } catch (error) {
    yield put(actionCreators.setThermostatValuesFailure(error.response));
  }
}

/**
*Add the abort controller to cancel the previous call in the patch API call
*call the api with signal and current setpoint
*if the API fails dispatch "setThermostatValuesFailure" action using put effect
*/
function* setCurrentSetPoint() {
  const abortController = new AbortController();
  try{
    const token = yield select();
    let data:PatchRequest ={
      currentSetpoint:token.thermostat.currentSetpoint,      
    } 
  yield call(updateCurrentSetPoint,abortController.signal,data); 
  }finally{
    if (yield(cancelled())) {
      // Cancel the API call if the saga was cancelled
      abortController.abort();
  }
  } 
}


function* setValueStart(){    
  yield fork(onUpdateValues);
}

//Watch for the "GET_VALUES" action
function* watchOnLoadThermoStatValues() {
  yield takeLatest(actionTypes.GET_VALUES, fetchDataPeriodically);
}

//Watch for the "SET_VALUES" action(Whenever the user press + - button)
//takeLatest allows only one fetchData task to run at any moment. 
//And it will be the latest started task.
//If a previous task is still running when another fetchData task is started, 
//the previous task will be automatically cancelled.
function* watchOnSetValuesStart() {
  yield takeLatest(actionTypes.SET_VALUES, setValueStart);
}

//Excuting the  tasks in parallel
export default function* setValuesSaga() {
  yield all([fork(watchOnSetValuesStart),fork(watchOnLoadThermoStatValues)]);
}


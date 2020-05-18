import { Thermostat, thermostatReducerDefaultState } from "../types/ThermostatState";
import {
  SET_VALUES,
  ThermostatActionTypes,
  GET_VALUES_SUCCESS,
  SET_VALUES_SUCCESS,
  GET_VALUES_FAILURE,
  SET_VALUES_FAILURE
} from "../types/actions";



/**
 * @param  {} state=thermostatReducerDefaultState
 * @param  {ThermostatActionTypes} action
 * @returns returnstate
 */
export default function thermoStatReducer(
  state = thermostatReducerDefaultState,
  action: ThermostatActionTypes
): Thermostat{
  switch (action.type) {
    case SET_VALUES:
      let updateedCurrentSetPoint:number = action.value;
      state.currentSetpoint = updateedCurrentSetPoint;  
      return state;
    case SET_VALUES_SUCCESS:
      return {...action.thermostat
      }
    case GET_VALUES_SUCCESS:    
      // Check here if the state is equal to the default state
      // if the state is not updated , mean the first time you are loading the application
      // update the state with the recent value
      // Second if deals with the recent updation of the temperature using get 
      if (state===thermostatReducerDefaultState){
        return {          
          ...action.thermostat
        }; 
      }else{
        action.thermostat.currentSetpoint=state.currentSetpoint;
        return {         
          ...action.thermostat
        };  
      }
    //Failure can be handled using any message code in the front end in future
    case GET_VALUES_FAILURE:
    case SET_VALUES_FAILURE:
     default:
      return state;
  }
}
export { thermoStatReducer };
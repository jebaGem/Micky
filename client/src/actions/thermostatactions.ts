
import * as actions from "../types/actions";
import { Thermostat } from "../types/ThermostatState";


/**
 * @param  {number} value
 * @returns actions
 * This function will be used to set the values in the state
 */
export function setThermostatValues(value: number): actions.SetValues {
  return {
    type: actions.SET_VALUES,
    value
  };
}
/**
 * @returns actions
 * This function will return the 
 */
export function getThermostatValuesRequest(): actions.GetValues {
    ///alert(4);
    return {
      type: actions.GET_VALUES
    };
  }


/**
 * @param  {Thermostat} thermostat
 * @returns actions
 */
export function getThermostatValuesSuccess(
  thermostat: Thermostat
): actions.GetValuesSucess {
  return {
    type: actions.GET_VALUES_SUCCESS,
    thermostat
  };
}
/**
 * @param  {string} message
 * @returns actions
 */
export function getThermoStatValuesFailure(
  message: string
): actions.GetValueFailure {
  return {
    type: actions.GET_VALUES_FAILURE,
    message
  };
}

/**
 * @param  {Thermostat} thermostat
 * @returns actions
 */
export function setThermostatValuesSuccess(thermostat:Thermostat
): actions.SetValuesSucess {
  return {
    type: actions.SET_VALUES_SUCCESS,
    thermostat
  };
}

/**
 * @param  {string} message
 * @returns actions
 */
export function setThermostatValuesFailure(
  message: string
): actions.GetValueFailure {
  return {
    type: actions.GET_VALUES_FAILURE,
    message
  };
}

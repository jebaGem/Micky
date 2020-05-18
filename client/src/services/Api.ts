

import axios, { AxiosResponse } from "axios";
import { Thermostat } from "../types/ThermostatState";
import { PatchRequest } from "../types/ThermostatState";

const URL = 'http://localhost:9090/';
const RESPONSE_STATUS_CODE_ACCEPTED = 202;

/**
 * Get operation fetch the data from the backend
 * returns promoises of type Thermostat
 */
export async function fetchThermostatValues(
): Promise<AxiosResponse<Thermostat>> {
  try {
    let res :any= await axios.get(URL);
    //If the staus is 202 call the API again without any delay
    if(res.status===RESPONSE_STATUS_CODE_ACCEPTED){
      fetchThermostatValues();
    }else{
      return res;
    }
    return res;
  } catch (e) {
    return e.response;
  }
}


  /**
   * Formats timestamp and returns a string in a format of "hh:mm:ss".
   * @param value A timestamp that needs to be formatted.
   */
  export const formatTimestamp = (value: number): string => {
    const date = new Date(value);
    const hours = formatTimeUnits(date.getHours());
    const minutes = formatTimeUnits(date.getMinutes());
    const seconds = formatTimeUnits(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;

 }

 /**
   * Formats time units converting number to string and filling empty decimal place with "0".
   * @param value A time unit value that needs to be formatted.
*/
 const formatTimeUnits = (value: number): string => value.toString().padStart(2, '0');
/**
 * @param  {AbortSignal} signal
 * @param  {any} data
 * This method will update the value
 */
export const updateCurrentSetPoint = async (signal: AbortSignal,data:PatchRequest) =>{
 await fetch(URL, {
        method: 'PATCH',
        signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentSetpoint: data.currentSetpoint })
    })
;
}





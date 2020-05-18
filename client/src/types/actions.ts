import { Thermostat } from "./ThermostatState";


export const GET_VALUES= "GET_VALUES";
export const SET_VALUES = "SET_VALUES";
export const GET_VALUES_SUCCESS= "GET_VALUES_SUCESS";
export const GET_VALUES_FAILURE= "GET_VALUES_FAILURE";
export const SET_VALUES_SUCCESS= "SET_VALUES_SUCCESS";
export const SET_VALUES_FAILURE= "SET_VALUES_FAILURE";

export interface GetValues {
  type: typeof GET_VALUES;
}
export interface GetValuesSucess {
    type: typeof GET_VALUES_SUCCESS;
    thermostat: Thermostat;
  }
  export interface GetValueFailure {
    type: typeof GET_VALUES_FAILURE;
    message: string;
  }
export interface SetValues {
  type: typeof SET_VALUES;
  value: number;
}
export interface SetValuesSucess {
  type: typeof SET_VALUES_SUCCESS;
  thermostat: Thermostat;
}

export interface SetValueFailure {
  type: typeof SET_VALUES_FAILURE;
  message: string;
}

export type ThermostateActions = GetValues |
GetValuesSucess |GetValueFailure|SetValues |SetValuesSucess|SetValueFailure;

export type ThermostatActionTypes =
  | GetValues
  |GetValuesSucess
  |GetValueFailure
  |SetValues
  |SetValuesSucess
  |SetValueFailure


export type AppActions = ThermostatActionTypes;

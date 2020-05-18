//State type
export interface Thermostat {
    currentSetpoint: number,
    currentTemp: number,
    timestamp: number,
}

export interface PatchRequest{
  currentSetpoint: number
}

//Default state for the store
export const thermostatReducerDefaultState: Thermostat= 
{
    currentSetpoint: 0,
    currentTemp: 0,
    timestamp: 0,
};
  
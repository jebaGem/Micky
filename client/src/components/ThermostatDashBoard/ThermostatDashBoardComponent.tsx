import React, { FunctionComponent, useEffect } from "react";
import { Thermostat } from "../../types/ThermostatState";
import styles from './Thermostat.module.scss';
import { formatTimestamp } from "../../services/Api";

interface Props {
  thermostat: Thermostat,
  setValues(val:number):void,
  loadThermostatValues(): void;
}

const ThermostatDashBoardComponent: FunctionComponent<Props> = props => {
  const { thermostat,setValues } = props;
  //dispatch the action to get the current data from the API
  useEffect(() => {
    props.loadThermostatValues();
 });
 return (
  <div className={styles.thermostat} data-testid="thermostat">
    <div className={styles.content}>
      <span className={styles.current} data-testid="current-temp">
        {thermostat.currentTemp}°
      </span>
      <span className={styles.setpoint} data-testid="setpoint">
        {thermostat.currentSetpoint.toFixed(1)}°
      </span>
      <span className={styles.timestamp}>
        Last update:<strong> {formatTimestamp(thermostat.timestamp)}</strong>
      </span>
      <button
        className={`${styles.btn} ${styles.left}`}
        onClick={() => setValues(thermostat.currentSetpoint-0.5)}
        data-testid="decrement-btn"
      >
        -
      </button>
      <button
        className={`${styles.btn} ${styles.right}`}
        onClick={() => setValues(thermostat.currentSetpoint+0.5)}
        data-testid="increment-btn"
      >
        +
      </button>
    </div>
  </div>
);
};

export default ThermostatDashBoardComponent;

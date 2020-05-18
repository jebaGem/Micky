import { connect } from "react-redux";

import { AppState } from "../../store/configureStore";
import * as actionTypes from "../../actions/thermostatactions";
import ThermostatDashBoardComponent from "./ThermostatDashBoardComponent";
import { ThermostatActionTypes } from "../../types/actions";
import { Dispatch } from "react";
import { getThermostatValuesRequest } from "../../actions/thermostatactions";

const mapStateToProps = (state: AppState) => {
  return {
    thermostat : state.thermostat
    
  };
};
const mapDispatchToProps = (dispatch: Dispatch<ThermostatActionTypes>) => ({
  loadThermostatValues: () => {
    dispatch(getThermostatValuesRequest());
  },
  setValues:(val:number)=>{
    dispatch(actionTypes.setThermostatValues(val));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThermostatDashBoardComponent);

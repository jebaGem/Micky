import React,{ FunctionComponent } from 'react';
import styles from './App.module.scss';

import ThermostatDashBoard from "../ThermostatDashBoard/ThermostatDashBoardContainer";
import { Provider } from "react-redux";
import configureStore from '../../store/configureStore';
//import Thermostat from '../Thermostat/Thermostat';
const store = configureStore();
export const App: FunctionComponent = props => {
  return (
    <div>   
      <h1>My Thermostat Application</h1>
       <Provider store={store}>     
      <ThermostatDashBoard />    
     </Provider>  
      {/* <Thermostat/>   */}
    </div>
  );
};



export default App;
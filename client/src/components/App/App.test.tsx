import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ThermostatDashBoard from "../ThermostatDashBoard/ThermostatDashBoardContainer";
import App from './App';	
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const mockState = {};
const mockReducer = () => mockState;
const mockStore = createStore(mockReducer, mockState);

	it('renders without crashing', () => {
  afterEach(cleanup);
  const div = document.createElement('div');	  
  ReactDOM.render(<App />, div);	  ReactDOM.render(
    <Provider store={mockStore}>
      <ThermostatDashBoard />
    </Provider>, div);
});
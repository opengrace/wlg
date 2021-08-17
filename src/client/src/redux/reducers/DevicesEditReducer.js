// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  devices: {}
};

// Reducer
export default function DevicesEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_DEVICES_SUCCESS:
      return { ...state, devices: action.payload };
    case types.UPDATE_DEVICES_SUCCESS:
      return { ...state, devices: action.payload };
    case types.GET_DEVICES_SUCCESS:
      return { ...state, devices: action.payload };
    case types.LIST_SIM_SUCCESS:
      return { ...state, listSim: action.payload };
    case types.LIST_GPS_SUCCESS:
      return { ...state, listGPS: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
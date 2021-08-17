// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function DevicesListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_DEVICES_SUCCESS:
      return { ...state, devices: action.payload };
    case types.LIST_DEVICES_SUCCESS:
      return { ...state, listDevices: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
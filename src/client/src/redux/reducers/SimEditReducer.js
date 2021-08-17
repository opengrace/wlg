// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  sim: {}
};

// Reducer
export default function SimEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_SIM_SUCCESS:
      return { ...state, sim: action.payload };
    case types.UPDATE_SIM_SUCCESS:
      return { ...state, sim: action.payload };
    case types.GET_SIM_SUCCESS:
      return { ...state, sim: action.payload };
    case types.FINDBY_SIM_DEVICES_SUCCESS:
      return { ...state, listDevices: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  gps: {}
};

// Reducer
export default function GPSEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_GPS_SUCCESS:
      return { ...state, gps: action.payload };
    case types.UPDATE_GPS_SUCCESS:
      return { ...state, gps: action.payload };
    case types.GET_GPS_SUCCESS:
      return { ...state, gps: action.payload };
    case types.FINDBY_GPS_DEVICES_SUCCESS:
      return { ...state, listDevices: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
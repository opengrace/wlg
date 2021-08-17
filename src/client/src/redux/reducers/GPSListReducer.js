// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function GPSListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_GPS_SUCCESS:
      return { ...state, gps: action.payload };
    case types.LIST_GPS_SUCCESS:
      return { ...state, listGPS: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
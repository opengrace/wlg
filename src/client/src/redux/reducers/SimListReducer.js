// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function SimListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_SIM_SUCCESS:
      return { ...state, sim: action.payload };
    case types.LIST_SIM_SUCCESS:
      return { ...state, listSim: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}
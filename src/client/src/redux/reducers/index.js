import { combineReducers } from "redux";

// START IMPORT REDUCERS
import DevicesEditReducer from "./DevicesEditReducer";
import DevicesListReducer from "./DevicesListReducer";
import GPSEditReducer from "./GPSEditReducer";
import GPSListReducer from "./GPSListReducer";
import HomeReducer from "./HomeReducer";
import SimEditReducer from "./SimEditReducer";
import SimListReducer from "./SimListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	DevicesEditReducer,
	DevicesListReducer,
	GPSEditReducer,
	GPSListReducer,
	HomeReducer,
	SimEditReducer,
	SimListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;

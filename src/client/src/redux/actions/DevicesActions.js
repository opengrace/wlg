import actionsFunction from "./generated/DevicesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import DevicesApi from "../../api/DevicesApi";
 
 actionsFunction.loadDevicesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return DevicesApi
     .getDevicesList()
     .then(list => {
       dispatch(actionsFunction.loadDevicesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;

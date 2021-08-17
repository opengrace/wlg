import actionsFunction from "./generated/GPSActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import GPSApi from "../../api/GPSApi";
 
 actionsFunction.loadGPSList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return GPSApi
     .getGPSList()
     .then(list => {
       dispatch(actionsFunction.loadGPSSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;

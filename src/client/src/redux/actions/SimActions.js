import actionsFunction from "./generated/SimActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import SimApi from "../../api/SimApi";
 
 actionsFunction.loadSimList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return SimApi
     .getSimList()
     .then(list => {
       dispatch(actionsFunction.loadSimSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;

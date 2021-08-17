import GPSApiGenerated from "./generated/GPSApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class GPSApi extends GPSApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get GPS List
  static getGPSList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/gpss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default GPSApi;
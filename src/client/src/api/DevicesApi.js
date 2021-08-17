import DevicesApiGenerated from "./generated/DevicesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class DevicesApi extends DevicesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Devices List
  static getDevicesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/devicess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default DevicesApi;
import SimApiGenerated from "./generated/SimApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class SimApi extends SimApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Sim List
  static getSimList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/sims")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default SimApi;
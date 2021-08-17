// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import DevicesActions from "../redux/actions/DevicesActions";
import SimActions from "../redux/actions/SimActions";
import GPSActions from "../redux/actions/GPSActions";

// END IMPORT ACTIONS

/** APIs

* actionsDevices.create
*	@description CRUD ACTION create
*
* actionsDevices.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsDevices.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsSim.list
*	@description CRUD ACTION list
*
* actionsGPS.list
*	@description CRUD ACTION list
*

**/

class DevicesEdit extends Component {
  // Init devices
  constructor(props) {
    super(props);
    this.state = {
      devices: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDevices.loadDevices(this.props.match.params.id);
    }
    
    this.props.actionsGPS.loadGPSList();
    this.props.actionsSim.loadSimList();
  }

  // Insert props devices in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      devices: props.devices
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.devices._id) {
      this.props.actionsDevices.saveDevices(this.state.devices).then(data => {
        this.props.history.push("/deviceses/");
      });
    } else {
      this.props.actionsDevices.createDevices(this.state.devices).then(data => {
        this.props.history.push("/deviceses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Devices Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _gps with GPS */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_gps">
              _gps
            </InputLabel>
            <Select
              value={this.state.devices._gps || ""}
              onChange={Utils.handleChangeSelect.bind(this, "devices")}
              inputProps={{
                id: "_gps",
                name: "_gps"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listGPS && this.props.listGPS.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m _sim with Sim */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_sim">
              _sim
            </InputLabel>
            <Select
              value={this.state.devices._sim || ""}
              onChange={Utils.handleChangeSelect.bind(this, "devices")}
              inputProps={{
                id: "_sim",
                name: "_sim"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listSim && this.props.listSim.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/deviceses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsDevices: bindActionCreators(DevicesActions, dispatch),
    actionsSim: bindActionCreators(SimActions, dispatch),
    actionsGPS: bindActionCreators(GPSActions, dispatch),
  };
};

// Validate types
DevicesEdit.propTypes = { 
  actionsDevices: PropTypes.object.isRequired,
  actionsSim: PropTypes.object.isRequired,
  actionsGPS: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    devices: state.DevicesEditReducer.devices,
    listGPS: state.DevicesEditReducer.listGPS,
    listSim: state.DevicesEditReducer.listSim
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DevicesEdit);

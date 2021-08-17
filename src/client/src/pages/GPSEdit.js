// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import GPSActions from "../redux/actions/GPSActions";
import DevicesActions from "../redux/actions/DevicesActions";

// END IMPORT ACTIONS

/** APIs

* actionsGPS.create
*	@description CRUD ACTION create
*
* actionsGPS.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsGPS.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsDevices.findBy_gps
*	@description CRUD ACTION findBy_gps
*	@param Objectid key - Id of model to search for
*

**/

class GPSEdit extends Component {
  // Init gps
  constructor(props) {
    super(props);
    this.state = {
      gps: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsGPS.loadGPS(this.props.match.params.id);
      this.props.actionsDevices.findBy_gps(this.props.match.params.id);
    }
    
  }

  // Insert props gps in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      gps: props.gps
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.gps._id) {
      this.props.actionsGPS.saveGPS(this.state.gps).then(data => {
        this.props.history.push("/gpses/");
      });
    } else {
      this.props.actionsGPS.createGPS(this.state.gps).then(data => {
        this.props.history.push("/gpses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>GPS Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Imei"
            label="Imei"
            value={this.state.gps.Imei || ""}
            onChange={Utils.handleChange.bind(this, "gps")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.gps.Imei && this.state.gps.Imei === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Models"
            label="Models"
            value={this.state.gps.Models || ""}
            onChange={Utils.handleChange.bind(this, "gps")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="SN"
            label="SN"
            value={this.state.gps.SN || ""}
            onChange={Utils.handleChange.bind(this, "gps")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.gps.SN && this.state.gps.SN === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Devices */}
          
          <h3>Devices</h3>
          {(!this.props.listDevices || this.props.listDevices.length === 0) && 
            <div>No Devices associated</div>
          }
          {this.props.listDevices &&
            this.props.listDevices.map((item, i) => {
              return (
                <Link to={"/devicess/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/gpses/">Back to list</Link>

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
    actionsGPS: bindActionCreators(GPSActions, dispatch),
    actionsDevices: bindActionCreators(DevicesActions, dispatch),
  };
};

// Validate types
GPSEdit.propTypes = { 
  actionsGPS: PropTypes.object.isRequired,
  actionsDevices: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    gps: state.GPSEditReducer.gps,
    listDevices: state.GPSEditReducer.listDevices
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GPSEdit);

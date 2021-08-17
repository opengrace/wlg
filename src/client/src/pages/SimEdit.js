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
import SimActions from "../redux/actions/SimActions";
import DevicesActions from "../redux/actions/DevicesActions";

// END IMPORT ACTIONS

/** APIs

* actionsSim.create
*	@description CRUD ACTION create
*
* actionsSim.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsSim.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsDevices.findBy_sim
*	@description CRUD ACTION findBy_sim
*	@param Objectid key - Id of model to search for
*

**/

class SimEdit extends Component {
  // Init sim
  constructor(props) {
    super(props);
    this.state = {
      sim: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsSim.loadSim(this.props.match.params.id);
      this.props.actionsDevices.findBy_sim(this.props.match.params.id);
    }
    
  }

  // Insert props sim in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      sim: props.sim
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.sim._id) {
      this.props.actionsSim.saveSim(this.state.sim).then(data => {
        this.props.history.push("/sims/");
      });
    } else {
      this.props.actionsSim.createSim(this.state.sim).then(data => {
        this.props.history.push("/sims/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Sim Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="SimNo"
            label="SimNo"
            value={this.state.sim.SimNo || ""}
            onChange={Utils.handleChange.bind(this, "sim")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.sim.SimNo && this.state.sim.SimNo === ""
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
            <Link to="/sims/">Back to list</Link>

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
    actionsSim: bindActionCreators(SimActions, dispatch),
    actionsDevices: bindActionCreators(DevicesActions, dispatch),
  };
};

// Validate types
SimEdit.propTypes = { 
  actionsSim: PropTypes.object.isRequired,
  actionsDevices: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    sim: state.SimEditReducer.sim,
    listDevices: state.SimEditReducer.listDevices
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimEdit);

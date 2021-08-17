// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import GPSActions from "../redux/actions/GPSActions";

// END IMPORT ACTIONS

/** APIs

* actionsGPS.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsGPS.list
*	@description CRUD ACTION list
*

**/


class GPSList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsGPS.loadGPSList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsGPS.deleteGPS(this.state.idDelete).then(data => {
      this.props.actionsGPS.loadGPSList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Imei",
        type: "number",
        label: "Imei"
      }, 
      {
        id: "Models",
        type: "string",
        label: "Models"
      }, 
      {
        id: "SN",
        type: "number",
        label: "SN"
      },
    ];
    const link = "/gpses/";

    return (
      <div>
        <h1>GPS List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Imei</TableCell>
              <TableCell align="right">Models</TableCell>
              <TableCell align="right">SN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/gpses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Imei }</TableCell>
                <TableCell align="right">{ row.Models }</TableCell>
                <TableCell align="right">{ row.SN }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/gpses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsGPS: bindActionCreators(GPSActions, dispatch),
  };
};

// Validate types
GPSList.propTypes = { 
  actionsGPS: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.GPSListReducer.listGPS
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GPSList);

// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import DevicesEdit from "./pages/DevicesEdit";
import DevicesList from "./pages/DevicesList";
import GPSEdit from "./pages/GPSEdit";
import GPSList from "./pages/GPSList";
import SimEdit from "./pages/SimEdit";
import SimList from "./pages/SimList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/deviceses/:id" component={ DevicesEdit }  />
              <PrivateRoute exact path="/deviceses" component={ DevicesList }  />
              <PrivateRoute exact path="/gpses/:id" component={ GPSEdit }  />
              <PrivateRoute exact path="/gpses" component={ GPSList }  />
              <PrivateRoute exact path="/sims/:id" component={ SimEdit }  />
              <PrivateRoute exact path="/sims" component={ SimList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;
/**
 * This file contains the Root component. 
 */

import * as React from "react";
import Topbar from "./topBar";

const Root = observer(
  class Root extends React.Component {
    render() {
      return (
        <div>
          <Topbar />
          <div>{this.props.children}</div>
        </div>
      );
    }
  }
);

export default Root;

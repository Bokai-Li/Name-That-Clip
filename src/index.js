/**
 * This file contains the necessary code to put the App
 * component within the DOM. This is where we pass the store
 * object to the parent component, App.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import Store from "./Store";

// We are initializing the store class only once and it happens 
// in this file. This is passed as a prop to the top container 
// component, which happens to be the App component in our case.
// We will never initialize the store class anywhere else otherwise 
// there will be issues. 
const store = new Store();

// this is where we are rendering the topmost container to the DOM. This
// only happens once 
ReactDOM.render(<App store={store}/>, document.getElementById("root"));
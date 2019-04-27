/**
 * This file contains the TopBar component.
 */

import * as React from "react";
import { observer } from "mobx-react";

const TopBar = observer(
  class TopBar extends React.Component {
    render() {
      let store = this.props.store;
      return (
        <ul>
          <li>
            <strong className="topText">Welcome to the Music Game</strong>
          </li>
          <li>
            <a
              onClick={() => {
                store.setPage("/");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                store.pause2();
                store.setPage("/select");
              }}
            >
              Change Music
            </a>
          </li>
          <li style={{ float: "right" }}>
            <a
              onClick={() => {
                store.pause2();
                store.setPage("/help");
              }}
            >
              Help
            </a>
          </li>
        </ul>
      );
    }
  }
);
/*
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="https://stackblitz.com/edit/music-app">Music Game</a>
        </li>
*/

export default TopBar;

/**
 * This file contains the SongSelection component.
 */

import * as React from "react";
import { observer } from "mobx-react";

const SelectSong = observer(
  class SelectSong extends React.Component {
    constructor(props) {
      super(props);
      this.keyboard = React.createRef();
    }

    componentDidMount() {
      this.keyboard.current.focus();
    }

    render() {
      let store = this.props.store;
      return (
        <div
          tabIndex={0}
          ref={this.keyboard}
          onKeyDown={e => store.keyPressFunctionSS(e)}
        >
          <p>Select a song:</p>
          <button
            onClick={() => {
              store.selectOne();
              store.setPage("/");
            }}
            className={store.buttonClass1SS}
          >
            Music 1
          </button>
          <button
            onClick={() => {
              store.selectTwo();
              store.setPage("/");
            }}
            className={store.buttonClass2SS}
          >
            Music 2
          </button>
          <button
            onClick={() => {
              store.selectThree();
              store.setPage("/");
            }}
            className={store.buttonClass3SS}
          >
            Music 3
          </button>
        </div>
      );
    }
  }
);

export default SelectSong;

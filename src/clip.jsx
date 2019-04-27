/**
 * This file contains the Clip component.
 */

import * as React from "react";
import { observer } from "mobx-react";

const Clip = observer(
  class Clip extends React.Component {
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
          onKeyDown={e => store.keyPressFunction(e)}
        >
          <h1>Play Clip</h1>
          <h1 className="rightDiv">score: {store.score}</h1>
          <div className="center1">
            <button onClick={() => store.play()} className={store.buttonClass1}>
              <i className="fa fa-play fa-5x" />
            </button>
          </div>
          <hr />
          <h1>Play Music</h1>
          <div className="center2">
            <button
              onClick={() => store.play2()}
              className={store.buttonClass2}
            >
              <i className="fas fa-play-circle fa-5x" />
            </button>
            <button
              onClick={() => store.pause2()}
              className={store.buttonClass3}
            >
              <i className="fa fa-stop-circle fa-5x" />
            </button>
            <button
              onClick={() => store.check(store.startTime)}
              className={store.buttonClass4}
            >
              <i className="fas fa-check-circle fa-5x" />
            </button>
          </div>
        </div>
      );
    }

    // componentDidMount() {
    //   document.addEventListener("keydown", this.keyPressFunction, false);
    // }
    // componentWillUnmount() {
    //   document.removeEventListener("keydown", this.keyPressFunction, false);
    // }
  }
);

export default Clip;

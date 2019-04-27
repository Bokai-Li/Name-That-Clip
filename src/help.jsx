import React, { Component } from "react";

class help extends Component {
  render() {
    return (
      <div>
        <h2> Game Explanation </h2>
        <p>
          To win the game, you need to find the section of music clip being
          played. First, you can use the
          <p1> green play button </p1>
          to start the game, this will give you a random section of the music.
          It will only play 20 second and then stops.
        </p>
        <p>
          If you are ready, use the
          <p2> Yellow circle play button </p2>
          to listen from the
          <b> beginning </b>
          of the music and when you hear the section of the music clip, click
          <p1> green check mark button </p1> to see if you are correct! If you
          miss the clip, you can stop the music by using the
          <p3> blue stop button </p3>.
        </p>
        <p>
          You can select change music on the top menu bar to change the source
          music.
        </p>
        <h1>Mouse Only</h1>
        <p>
          You can use <strong>mouse</strong> to click on the button you want to
          select.
        </p>
        <h1>Space and Enter</h1>
        <p>
          You can use <strong>space</strong> key to hover to the next button and
          use <strong>enter</strong> key to select.
        </p>
        <h1>WASD 4 keys</h1>
        <p>
          You can press W for playing the 20 second clip, A for playing the
          whole music, S for stop, and D for check answer. The keyboard position
          is similar to the button layout.
        </p>
      </div>
    );
  }
}

export default help;

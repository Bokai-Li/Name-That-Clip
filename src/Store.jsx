/**
 * This file contains all the necessary logic for updating state as well
 * as holding variables. This is where the magic of MobX comes into play.
 * This file is the only place where all state variables are shared between
 * files which makes it so much easier to update the state as well as any
 * necessary variables.
 */

//add subtract score. penalty, make it shorter
//friend, window(20)/2, config, parameterize
//modification

import Config from "./config";
import { observable, decorate, action } from "mobx";

class Store {
  url = Config.URLS[0];
  audio = new Audio(this.url);
  audio2 = new Audio(this.url);
  songSelected = 1;
  currentPage = "/";
  buttonSelected = 1;
  buttonID = 1;
  buttonClass1 = "gamebtn1S";
  buttonClass2 = "gamebtn2";
  buttonClass3 = "gamebtn3";
  buttonClass4 = "gamebtn4";

  buttonClass1SS = "gamebtn1S";
  buttonClass2SS = "gamebtn2";
  buttonClass3SS = "gamebtn3";

  isPlaying = false;
  isPaused = true;
  startTime = Math.floor(Math.random() * (220 - 20));
  lookingState = false;
  playedAtLeastOnce = false;
  score = 0;

  buttonSelectedSS = 1;

  // Increments songSelected by 1
  increment() {
    this.songSelected++;
    if (this.songSelected > 3) {
      this.songSelected = 1;
      this.url = Config.URLS[0];
    } else {
      this.url = Config.URLS[this.songSelected - 1];
    }
    this.audio = new Audio(this.url);
  }

  selectOne() {
    this.songSelected = 1;
    this.url = Config.URLS[this.songSelected - 1];
    this.audio = new Audio(this.url);
  }

  selectTwo() {
    this.songSelected = 2;
    this.url = Config.URLS[this.songSelected - 1];
    this.audio = new Audio(this.url);
  }

  selectThree() {
    this.songSelected = 3;
    this.url = Config.URLS[this.songSelected - 1];
    this.audio = new Audio(this.url);
  }

  // Changes the page
  setPage(page) {
    this.currentPage = page;
  }

  // resets the song track
  reset() {
    this.isPlaying = false;
    this.isPaused = true;
    this.startTime = Math.floor(Math.random() * (241 - 20));
    this.lookingState = false;
    this.playedAtLeastOnce = false;
  }

  // plays the song track
  play() {
    this.isPlaying = true;
    this.isPaused = false;
    this.lookingState = false;
    this.playedAtLeastOnce = true;
    this.audio.currentTime = this.startTime;
    this.audio.ontimeupdate = this.isPaused;
    this.audio.play();
    setTimeout(() => {
      this.isPlaying = false;
      this.isPaused = true;
      this.audio.pause();
    }, Config.time);
  }

  // // pauses the song track
  // pause() {
  //   if (this.audio.currentTime > this.startTime + 20 && !this.lookingState) {
  //     this.isPlaying = false;
  //     this.isPaused = true;
  //     this.audio.pause();
  //   }
  // }

  // plays the song track
  play2() {
    if (this.playedAtLeastOnce) {
      this.lookingState = true;
      this.isPlaying = true;
      this.isPaused = false;
      this.audio.currentTime = 0;
      this.audio.play();
    }
  }

  // pauses the song track
  pause2() {
    this.isPlaying = false;
    this.isPaused = true;
    this.audio.pause();
    this.audio2.pause();
  }

  // checks for the right time
  check(rightTime) {
    if (this.lookingState) {
      if (
        rightTime - 10 < this.audio.currentTime &&
        rightTime + 10 > this.audio.currentTime
      ) {
        let temp =
          this.score -
          Math.round(50 * Math.abs(this.audio.currentTime - rightTime)) +
          1000;
        this.score = temp;
        let msg = new SpeechSynthesisUtterance(
          "Correct! Your score now is " + this.score
        );
        window.speechSynthesis.speak(msg);
        this.reset();
        this.pause2();
      } else {
        let msg = new SpeechSynthesisUtterance("not quite! keep trying!");

        window.speechSynthesis.speak(msg);
      }
    }
  }

  //keyboard handler for selection page
  keyPressFunctionSS(event) {
    if (event.keyCode === 32) {
      //space
      let temp = this.buttonSelectedSS;
      switch (temp) {
        case 1:
        case 2:
          temp++;
          break;
        case 3:
          temp = 1;
          break;
        default:
          console.log("error button state");
      }
      this.buttonSelectedSS = temp;
    }
    for (let i = 1; i <= 3; i++) {
      if (i === this.buttonSelectedSS) {
        let className = "";
        let className2 = "";
        let buttonName = "";
        let buttonName2 = "";
        if (i === 1) {
          className = "gamebtn" + i + "S";
          className2 = "gamebtn3";
          buttonName = "buttonClass" + i + "SS";
          buttonName2 = "buttonClass3SS";
        } else {
          className = "gamebtn" + i + "S";
          className2 = "gamebtn" + (i - 1);
          buttonName = "buttonClass" + i + "SS";
          buttonName2 = "buttonClass" + (i - 1) + "SS";
        }
        this[buttonName] = className;
        this[buttonName2] = className2;
        break;
      }
    }
    if (event.keyCode === 13) {
      //enter
      switch (this.buttonSelectedSS) {
        case 1:
          this.selectOne();
          this.setPage("/");
          break;
        case 2:
          this.selectTwo();
          this.setPage("/");
          break;
        case 3:
          this.selectThree();
          this.setPage("/");
          break;
        default:
          console.log("error button state");
      }
    }
    if (event.keyCode === 65) {
      //a
      this.selectOne();
      this.setPage("/");
    }
    if (event.keyCode === 83) {
      //s
      this.selectTwo();
      this.setPage("/");
    }
    if (event.keyCode === 68) {
      //d
      this.selectThree();
      this.setPage("/");
    }
  }

  // keyboard handler for clip/home page
  keyPressFunction(event) {
    if (event.keyCode === 32) {
      //space
      let temp = this.buttonSelected;
      switch (temp) {
        case 1:
        case 2:
        case 3:
          temp++;
          break;
        case 4:
          temp = 1;
          break;
        default:
          console.log("error button state");
      }
      this.buttonSelected = temp;
      for (let i = 1; i <= 4; i++) {
        if (i === this.buttonSelected) {
          let className = "";
          let className2 = "";
          let buttonName = "";
          let buttonName2 = "";
          if (i === 1) {
            className = "gamebtn" + i + "S";
            className2 = "gamebtn4";
            buttonName = "buttonClass" + i;
            buttonName2 = "buttonClass4";
          } else {
            className = "gamebtn" + i + "S";
            className2 = "gamebtn" + (i - 1);
            buttonName = "buttonClass" + i;
            buttonName2 = "buttonClass" + (i - 1);
          }
          this[buttonName] = className;
          this[buttonName2] = className2;
          break;
        }
      }
    }
    if (event.keyCode === 13) {
      //enter
      switch (this.buttonSelected) {
        case 1:
          this.play();
          break;
        case 2:
          this.play2();
          break;
        case 3:
          this.pause2();
          break;
        case 4:
          this.check(this.startTime);
          break;
        default:
          console.log("error button state");
      }
    }
    if (event.keyCode === 87) {
      //w
      this.play();
    }
    if (event.keyCode === 65) {
      //a
      this.play2();
    }
    if (event.keyCode === 83) {
      //s
      this.pause2();
    }
    if (event.keyCode === 68) {
      //d
      this.check(this.startTime);
    }
  }
  switchPage() {
    console.log("heelo");
  }
}

/**
 * The decorate function is necessary since it allows you to
 * create observable variables, computed functions, and to implement
 *  every other MobX feature, please look at URL for more information. You MUST
 * use action.bound when dealing with events, such as click or keypress events.
 * https://mobx.js.org/best/decorators.html
 */
decorate(Store, {
  audio: observable,
  songSelected: observable,
  url: observable,
  currentPage: observable,
  buttonSelected: observable,
  isPlaying: observable,
  isPaused: observable,
  startTime: observable,
  lookingState: observable,
  playedAtLeastOnce: observable,
  score: observable,
  buttonID: observable,
  buttonClass1: observable,
  buttonClass2: observable,
  buttonClass3: observable,
  buttonClass4: observable,
  buttonClass1SS: observable,
  buttonClass2SS: observable,
  buttonClass3SS: observable,
  buttonselectedSS: observable,
  increment: action.bound,
  setPage: action.bound,
  reset: action.bound,
  play: action.bound,
  pause: action.bound,
  play2: action.bound,
  pause2: action.bound,
  getBtnClass: action.bound,
  check: action.bound,
  keyPressFunction: action.bound,
  keyPressFunctionSS: action.bound,
  switchPage: action.bound
});

export default Store;

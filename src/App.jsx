import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  let index = 0,
    interval = 1000;

  const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const animate = (star) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
  };

  for (const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
      animate(star);

      setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3));
  }

  return (
    <div className="App">
      <div id="chat-container">
        <div id="intail">
          <div className="headDiv">
            <h1 id="head">
              <span className="magic">
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path
                      d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
                    />
                  </svg>
                </span>
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path
                      d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
                    />
                  </svg>
                </span>
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path
                      d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
                    />
                  </svg>
                </span>Oako
                <span className="magic-text"> AI&nbsp;<FontAwesomeIcon icon={faCheckCircle} /></span>
              </span>
            </h1>
          </div>
          <p>
            Build By <br />
            Mohammed Anfas K P
          </p>
          <div className="boxs">
            <div className="box">
              Questions
              <div className="arrow-container">
                <FontAwesomeIcon icon={faChevronRight} className="arrow-first" style={{ color: "#ffffff" }} />
                <FontAwesomeIcon icon={faChevronRight} className="arrow-second" style={{ color: "#ffffff" }} />
                <FontAwesomeIcon icon={faChevronRight} className="arrow-third" style={{ color: "#ffffff" }} />
              </div>
            </div>
            <div className="box lck">Locked</div>
            <div className="box lck">Locked</div>
            <div className="box lck">Locked</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

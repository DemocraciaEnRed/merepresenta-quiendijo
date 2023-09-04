import Round from "./components/round";
import _ from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Landing from "./components/landing";
import Topics from "./components/topics";
import "./App.css";
import 'animate.css';

function App() {
  const [currentStep, setCurrentStep] = useState("landing");
  const setPlayAgain = _.last(useState());
  const Game = ({ setPlayAgain }) => {
    return <Round setPlayAgain={setPlayAgain}/>;
  };

  const steps = {
    "landing": () => <Landing follow={() => setCurrentStep("topics")}/>,
    "topics": () => <Topics follow={() => setCurrentStep("game")}/>,
    "game": () => <Game setPlayAgain={setPlayAgain}/>
  };

  const Step = _.get(steps, currentStep);

  return <div className="App">
      <Step />
  </div>;
}

export default App;

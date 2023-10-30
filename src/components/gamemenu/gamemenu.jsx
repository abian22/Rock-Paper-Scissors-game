import React, { useState, useEffect, useContext } from "react";
import Paper from "../paper/paper";
import Rock from "../rock/rock";
import Scissor from "../scissor/scissor";
import PaperWeb from "../paper/paperWeb";
import ScissorWeb from "../scissor/scissorWeb";
import RockWeb from "../rock/rockWeb";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/gamecontext";
import { ScoreContext } from "../../context/scorecontext";
import Rules from "../rules/rules";
import "./gamemenu.css";

function GameMenu() {
  const [showRules, setShowRules] = useState(false);
  const [cpuChoice, setCpuChoice] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [componentToRender, setComponentToRender] = useState(null);
  const [componentToRenderWeb, setComponentToRenderWeb] = useState(null);
  const [cpuComponentToRender, setCpuComponentToRender] = useState(null);
  const [cpuComponentToRenderWeb, setCpuComponentToRenderWeb] = useState(null);
  const { punctuation, setPunctuation } = useContext(ScoreContext);
  const { selectedItem } = useContext(GameContext);

  function handleRules() {
    setShowRules(!showRules);
  }

  function closeRules() {
    setShowRules(!showRules);
  }

  function playerSelection() {
    switch (selectedItem) {
      case "paper":
        setComponentToRender(<Paper />);
        setComponentToRenderWeb(<PaperWeb />);
        break;
      case "rock":
        setComponentToRender(<Rock />);
        setComponentToRenderWeb(<RockWeb />);
        break;
      case "scissor":
        setComponentToRender(<Scissor />);
        setComponentToRenderWeb(<ScissorWeb />);
        break;
    }
  }

  function cpuSelection() {
    const cpuOptions = ["paper", "rock", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    const selectedOption = cpuOptions[randomNumber];
    setCpuChoice(selectedOption);

    switch (selectedOption) {
      case "paper":
        setCpuComponentToRender(<Paper />);
        setCpuComponentToRenderWeb(<PaperWeb />);
        break;
      case "rock":
        setCpuComponentToRender(<Rock />);
        setCpuComponentToRenderWeb(<RockWeb />);
        break;
      case "scissor":
        setCpuComponentToRender(<Scissor />);
        setCpuComponentToRenderWeb(<ScissorWeb />);
        break;
    }
  }

  function result() {
    if (selectedItem === cpuChoice) {
      setResultMessage("DRAW");
    } else if (
      (selectedItem === "paper" && cpuChoice === "rock") ||
      (selectedItem === "scissor" && cpuChoice === "paper") ||
      (selectedItem === "rock" && cpuChoice === "scissor")
    ) {
      setPunctuation(punctuation + 1);
      setResultMessage("YOU WIN");
    } else if (
      (cpuChoice === "paper" && selectedItem === "rock") ||
      (cpuChoice === "scissor" && selectedItem === "paper") ||
      (cpuChoice === "rock" && selectedItem === "scissor")
    ) {
      setResultMessage("YOU LOSE");
    } else setResultMessage("");
  }

  function handlePlayAgain() {
    setCpuComponentToRender(null);
    setResultMessage("");
  }

  console.log("my choice:" + selectedItem);
  console.log("cpu choice:" + cpuChoice);
  console.log("puntuacion:" + punctuation);

  useEffect(() => {
    playerSelection();
  }, []);

  useEffect(() => {
    setTimeout(cpuSelection, 1000);
  }, [selectedItem]);

  useEffect(() => {
    result();
  }, [cpuChoice]);

  console.log("mensaje de resultado: " + resultMessage);

  return (
    <>
      <div className="componentToRenderContainer">
        {window.innerWidth >= 1300 ? componentToRenderWeb : componentToRender}
      <div className="youPickedContainer">YOU PICKED </div>
      </div>
      <div className="cpuComponentToRenderContainer">
      {window.innerWidth >= 1300 ? cpuComponentToRenderWeb : cpuComponentToRender}
      <div className="theHousePickedContainer">THE HOUSE PICKED </div>
      </div>
      <div
        className="resultContainer"
        style={{
          display: resultMessage === "" ? "none" : "",
        }}
      >
        <span
          className="resultMessageContainer"
          style={{
            marginLeft: resultMessage === "DRAW" ? "40px" : "0px",
          }}
        >
          {resultMessage}
        </span>
        <Link to="/initialPage" style={{ textDecoration: "none" }}>
          <div className="playAgainContainer" onClick={handlePlayAgain}>
            PLAY AGAIN
          </div>
        </Link>
      </div>

      <div className="rulesContainer" onClick={handleRules}>
        RULES
      </div>
      <Rules showRules={showRules} closeRules={closeRules} />
    </>
  );
}

export default GameMenu;

import React, { useState, useEffect, useContext } from "react";
import Paper from "../paper/paper";
import Rock from "../rock/rock";
import Scissor from "../scissor/scissor";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/gamecontext";
import { ScoreContext } from "../../context/scorecontext";
import Rules from "../rules/rules";

function GameMenu() {
  const [showRules, setShowRules] = useState(false);
  const [cpuChoice, setCpuChoice] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [componentToRender, setComponentToRender] = useState(null);
  const [cpuComponentToRender, setCpuComponentToRender] = useState(null);
  
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
        break;
      case "rock":
        setComponentToRender(<Rock />);
        break;
      case "scissor":
        setComponentToRender(<Scissor />);
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
        break;
      case "rock":
        setCpuComponentToRender(<Rock />);
        break;
      case "scissor":
        setCpuComponentToRender(<Scissor />);
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
      <div style={{ marginLeft: "25%", marginTop: "150px" }}>
        {componentToRender}
      </div>
      <div
        style={{
          textAlign: "center",
          marginRight: "35%",
          marginTop: "20px",
          color: "white",
          fontFamily: "semiBold",
          letterSpacing: "2px",
        }}
      >
        YOU PICKED{" "}
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "60px",
          marginLeft: "65%",
          marginTop: "-140px",
          backgroundColor: "hsl(214, 60%, 14%)",
        }}
      >
        {cpuComponentToRender}
      </div>
      <div
        style={{
          textAlign: "center",
          marginLeft: "45%",
          marginTop: "20px",
          color: "white",
          fontFamily: "semiBold",
          letterSpacing: "2px",
        }}
      >
        THE HOUSE PICKED{" "}
      </div>
      <div
        style={{
          justifyContent: "center",
          marginLeft: "40%",
          marginTop: "60px",
          display: resultMessage === "" ? "none" : "",
        }}
      >
        <span
          style={{
            color: "white",
            fontFamily: "bold",
            fontSize: "60px",
            marginLeft: resultMessage === "DRAW" ? "40px" : "0px",
          }}
        >
          {resultMessage}
        </span>
        <Link to="/initialPage" style={{ textDecoration: "none" }}>
          <div
            style={{
              color: "hsl(229, 25%, 31%)",
              padding: "15px",
              width: "200px",
              textAlign: "center",
              marginRight: "50px",
              marginTop: "20px",
              backgroundColor: "white",
              borderRadius: "10px",
              fontFamily: "bold",
              letterSpacing: "2px",
              cursor: "pointer",
            }}
            onClick={handlePlayAgain}
          >
            PLAY AGAIN
          </div>
        </Link>
      </div>

      <div
        style={{
          color: "white",
          border: "1px solid",
          width: "100px",
          padding: "12px",
          textAlign: "center",
          borderRadius: "10px",
          fontFamily: "semiBold",
          letterSpacing: "3px",
          marginLeft: "45%",
          position: "relative",
          bottom: "0",
          marginTop: "80px",
          cursor: "pointer",
        }}
        onClick={handleRules}
      >
        RULES
      </div>
      <Rules showRules={showRules} closeRules={closeRules} />
    </>
  );
}

export default GameMenu;

import React, { useState, useContext } from "react";
import Rules from "../rules/rules";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/gamecontext";
import "./mainmenu.css";

function MainMenu() {
  const [showRules, setShowRules] = useState(false);
  const { selectedItem, setSelectedItem } = useContext(GameContext);

  function handleRules() {
    setShowRules(!showRules);
  }

  function closeRules() {
    setShowRules(!showRules);
  }

  function handleSelect(item) {
    console.log("Setting selectedItem:", item);
    setSelectedItem(item);
  }
  return (
    <>
      <div className="centerContainer">
        <div className="choiceContainer">
          <Link
            to={{
              pathname: "/initialPage/GameScreen",
            }}
          >
            <div
              className="paperContainer"
              onClick={() => handleSelect("paper")}
            >
              <img className="paperImg" src={"../images/icon-paper.svg"} />
            </div>
          </Link>
          <Link
            to={{
              pathname: "/initialPage/GameScreen",
            }}
          >
            <div
              className="scissorContainer"
              onClick={() => handleSelect("scissor")}
            >
              <img className="scissorImg" src={"../images/icon-scissors.svg"} />
            </div>
          </Link>
          <Link
            to={{
              pathname: "/initialPage/GameScreen",
            }}
          >
            <div className="rockContainer" onClick={() => handleSelect("rock")}>
              <img className="rockImg" src={"../images/icon-rock.svg"} />
            </div>
          </Link>
          <div className="rules" onClick={handleRules}>
            RULES
          </div>
        </div>
      </div>
      <Rules showRules={showRules} closeRules={closeRules} />
    </>
  );
}

export default MainMenu;

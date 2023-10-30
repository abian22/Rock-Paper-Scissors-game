import React, { useState, useContext } from "react";
import Rules from "../rules/rules";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/gamecontext";

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
      <div
        style={{
          width: "64%",
          marginLeft: "20%",
          height: "350px",
          backgroundImage: "url('../images/bg-triangle.svg')",
          backgroundRepeat: "no-repeat",
          justifyContent: "center",
          backgroundPosition: "center",
          display: "flex",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "90px",
            marginRight: "230px",
          }}
        >
          <Link
            to={{
              pathname: "/initialPage/GameScreen",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "90px",
                border: "10px solid transparent",
                borderRadius: "50%",
                backgroundColor: "white",
                marginTop: "-10px",
                backgroundImage:
                  "linear-gradient(90deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
                backgroundOrigin: " border-box",
                boxShadow: "inset 0 100vw white",
                cursor: "pointer",
              }}
              onClick={() => handleSelect("paper")}
            >
              <img
                src={"../images/icon-paper.svg"}
                style={{ marginLeft: "22px", marginTop: "15px" }}
              />
            </div>
          </Link>
          <Link
            to={{
              pathname: "/initialPage/GameScreen",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "90px",
                marginLeft: "230px",
                border: "10px solid transparent",
                borderRadius: "50%",
                backgroundColor: "white",
                marginTop: "-110px",
                backgroundImage:
                  "linear-gradient(90deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
                backgroundOrigin: " border-box",
                boxShadow: "inset 0 100vw white",
                cursor: "pointer",
              }}
              onClick={() => handleSelect("scissor")}
            >
              <img
                src={"../images/icon-scissors.svg"}
                style={{
                  justifyContent: "center",
                  marginLeft: "27px",
                  marginTop: "15px",
                }}
              />
            </div>
          </Link>
          <Link
            to={{
              pathname: "/initialPage/GameScreen",
            }}
          >
            <div
              style={{
                width: "110px",
                height: "100px",
                backgroundRepeat: "no-repeat",
                marginLeft: "100px",
                marginTop: "90px",
                border: "10px solid transparent",
                borderRadius: "50%",
                backgroundColor: "white",
                backgroundImage:
                  " linear-gradient(90deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
                backgroundOrigin: " border-box",
                boxShadow: "inset 0 100vw white",
                cursor: "pointer",
              }}
              onClick={() => handleSelect("rock")}
            >
              <img
                src={"../images/icon-rock.svg"}
                style={{
                  justifyContent: "center",
                  marginLeft: "27px",
                  marginTop: "25px",
                }}
              />
            </div>
          </Link>
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
              marginLeft: "100%",
              marginTop: "30px",
              cursor: "pointer",
            }}
            onClick={handleRules}
          >
            RULES
          </div>
        </div>
      </div>
      <Rules showRules={showRules} closeRules={closeRules} />
    </>
  );
}

export default MainMenu;

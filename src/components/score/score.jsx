import React, { useContext } from "react";
import "./score.css";
import { ScoreContext } from "../../context/scorecontext";

function Score() {
  const { punctuation } = useContext(ScoreContext);
  
  return (
    <>
      <div className="scoreContainer" style={{ marginTop: "20px" }}>
        <div
          style={{
            border: "4px solid",
            width: "50%",
            color: "white",
            borderColor: "hsl(217, 16%, 45%)",
            fontFamily: "bold",
            padding: "15px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            minWidth: "300px",
            maxWidth:"720px"
          }}
        >
          <div
            style={{
              marginTop: "20px",
              marginLeft: "20px",
              lineHeight: "22px",
              fontSize: "28px",
            }}
          >
            <span>ROCK</span>
            <br />
            <span>PAPER</span>
            <br />
            <span>SCISSOR</span>
          </div>
          <div
            style={{
              borderRadius: "5px",
              width: "70px",
              height: "60px",
              textAlign: "center",
              backgroundColor: "white",
              color: "hsl(229, 64%, 46%)",
              letterSpacing: "2px",
              fontSize: "14px",
              padding: "20px",
            }}
          >
            <span style={{ marginTop: "10px" }}>SCORE</span>
            <div
              style={{
                fontFamily: "bold",
                fontSize: "48px",
                color: "hsl(229, 25%, 31%)",
              }}
            >
              {punctuation}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Score;

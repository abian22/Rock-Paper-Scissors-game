import React from "react";
import { useState } from "react";
import "./rules.css";
function Rules({ showRules, closeRules }) {

  return (
    <>
      <div
        className="container"
        style={{ display: showRules ? "" : "none" }}
      >
        <div
          style={{
            fontFamily: "bold",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          RULES
        </div>
        <div
          className="imgContainer"
          style={{ width: "98%", justifyContent: "center", display: "flex" }}
        >
          <img
            src={"/images/image-rules.svg"}
            style={{ marginTop: "100px", justifyContent: "center" }}
          />
        </div>
        <div
          className="closeCointainer"
          style={{ width: "98%", justifyContent: "center", display: "flex" }}
        >
          <img
            src={"/images/icon-close.svg"}
            style={{
              position: "relative",
              marginTop: "10%",
              cursor: "pointer",
            }}
            onClick={closeRules}
          />
        </div>
      </div>
    </>
  );
}

export default Rules;

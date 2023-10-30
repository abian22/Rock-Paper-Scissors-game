import React from "react";

function ScissorWeb() {
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "190px",
          border: "20px solid transparent",
          borderRadius: "50%",
          backgroundColor: "white",
          marginTop: "-10px",
          backgroundImage:
            "linear-gradient(90deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
          backgroundOrigin: " border-box",
          boxShadow: "inset 0 100vw white",
        }}
      >
        <img
          src={"/images/icon-scissors.svg"}
          style={{ marginLeft: "62px", marginTop: "45px", width:"80px" }}
        />
      </div>
    </>
  );
}

export default ScissorWeb;

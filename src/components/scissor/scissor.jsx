import React from 'react'

function Scissor() {
  return (
    <>
             <div
            style={{
              width: "100px",
              height: "90px",
              border: "10px solid transparent",
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
              style={{ marginLeft: "22px", marginTop: "15px" }}
            />
          </div>
    </>
  )
}

export default Scissor
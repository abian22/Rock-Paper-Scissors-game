import React from 'react'

function Paper() {
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
                "linear-gradient(90deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
              backgroundOrigin: " border-box",
              boxShadow: "inset 0 100vw white",
            }}
          >
            <img
              src={"/images/icon-paper.svg"}
              style={{ marginLeft: "22px", marginTop: "15px" }}
            />
          </div>
    </>
  )
}

export default Paper
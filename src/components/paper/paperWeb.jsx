import React from 'react'

function PaperWeb() {
  return (
    <>
     <div
            style={{
              width: "200px",
              height: "180px",
              border: "20px solid transparent",
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
              style={{ marginLeft: "55px", marginTop: "35px", width:"80px" }}
            />
          </div>
    </>
  )
}

export default PaperWeb
import React from 'react'

function Rock() {
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
              " linear-gradient(90deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
              backgroundOrigin: " border-box",
              boxShadow: "inset 0 100vw white",
            }}
          >
            <img
              src={"/images/icon-rock.svg"}
              style={{ marginLeft: "22px", marginTop: "15px" }}
            />
          </div>
  
    </>
  )
}

export default Rock